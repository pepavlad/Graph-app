import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLinks, selectVertics } from '../../redux/selectors/graph';
import { IVertic } from '../../interfaces/IVertic';
import connectVertic from './helpers/connectVetrics';
import selectVertic from './helpers/selectVertic';
import AddVertic from './helpers/addVertic';
import render from './helpers/render';
import {
  connectVerticAction,
  addVerticAction,
  unselectVerticAction,
} from '../../redux/actions/graphs';

interface CanvasProps {
  btnType: string;
}

const Canvas: React.FC<CanvasProps> = ({ btnType }) => {
  const [numOfVertic, setNumOfVertic] = useState(0);
  const dispatch = useDispatch();
  const links = useSelector(selectLinks);
  const vertics = useSelector(selectVertics);
  const ref = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  function eventFunc(event: React.MouseEvent<HTMLCanvasElement>) {
    if (ref.current) {
      canvasCtxRef.current = ref.current.getContext('2d');
      const ctx = canvasCtxRef.current;
      switch (btnType) {
        case 'add':
          dispatch(addVerticAction(AddVertic(event, ref, ctx, numOfVertic)!));
          setNumOfVertic(numOfVertic + 1);
          break;
        case 'connect':
          selectVertic(event, ctx, vertics, dispatch);
          break;
        default:
          break;
      }
    }
  }

  useEffect(() => {
    if (
      vertics.filter(
        (elem: IVertic) => elem.isSelectedFirst || elem.isSelectedSecond
      ).length === 2
    ) {
      dispatch(connectVertic(vertics, links));
      dispatch(unselectVerticAction());
    }
    render(vertics, canvasCtxRef, ref, links);
  }, [vertics, links]);

  return (
    <canvas
      onMouseDown={eventFunc}
      id='canvas'
      ref={ref}
      width='1000'
      height='600'
    />
  );
};
export default Canvas;
