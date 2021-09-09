import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IVertic } from '../../interfaces/IVertic';
import render from '../../helpers/render';
import {
  addVertic,
  selectVertic,
  connectVertic,
  unselectVertices,
} from '../../redux/thunk/graphs';
import { selectLinks, selectVertics } from '../../redux/selectors/graph';

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

  function eventFunc(event: any) {
    if (ref.current) {
      canvasCtxRef.current = ref.current.getContext('2d');
      const ctx = canvasCtxRef.current;
      switch (btnType) {
        case 'add':
          dispatch(addVertic(event, ref, ctx, numOfVertic, setNumOfVertic));
          break;
        case 'connect':
          dispatch(selectVertic(event, ctx, vertics));
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
      dispatch(unselectVertices());
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
