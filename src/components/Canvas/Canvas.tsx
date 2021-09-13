import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IVertic } from '../../interfaces/IVertic';
import render from './helpers/render';
import {
  addVerticAction,
  unselectVerticAction,
} from '../../redux/actions/graphs';
import { selectLinks, selectVertics } from '../../redux/selectors/graph';
import draw from './helpers/addVertic';
import selectVertic from './helpers/selectVertic';
import connectVertic from './helpers/connectVertic';
import { selectToMoveVertic, mouseMoveEvent } from './helpers/moveVertic';
import { Coords } from '../../interfaces/coords';
import deleteVertic from './helpers/deleteVertic';

interface CanvasProps {
  btnType: string;
}

const Canvas: React.FC<CanvasProps> = ({ btnType }) => {
  const [numOfVertic, setNumOfVertic] = useState(0);
  const [startPoint, setStartPoint] = useState<Coords>();
  const dispatch = useDispatch();
  const links = useSelector(selectLinks);
  const vertics = useSelector(selectVertics);
  const ref = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);
  const mouseMove = (event: React.MouseEvent) => {
    if (btnType === 'move') {
      dispatch(
        mouseMoveEvent(event, ref, vertics, startPoint, canvasCtxRef, links)
      );
    }
  };
  const mouseUp = () => {
    if (btnType === 'move') {
      dispatch(unselectVerticAction());
    }
  };
  const mouseDown = (event: React.MouseEvent) => {
    if (ref.current) {
      canvasCtxRef.current = ref.current.getContext('2d');
      const ctx = canvasCtxRef.current;
      switch (btnType) {
        case 'add':
          dispatch(addVerticAction(draw(event, ref, ctx, numOfVertic)!));
          setNumOfVertic(numOfVertic + 1);
          break;
        case 'connect':
          dispatch(selectVertic(event, ctx, vertics));
          break;
        case 'move':
          dispatch(selectToMoveVertic(event, ref, vertics, ctx, setStartPoint));
          break;
        case 'delete':
          dispatch(deleteVertic(event, ctx, vertics, links));
          break;
        default:
          break;
      }
    }
  };
  useEffect(() => {
    dispatch(unselectVerticAction());
  }, [btnType]);

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
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
      onMouseMove={mouseMove}
      id='canvas'
      ref={ref}
      width='1000'
      height='600'
    />
  );
};

export default Canvas;
