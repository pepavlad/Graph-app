import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IVertic } from '../../interfaces/IVertic';
import render from './helpers/render';
import {
  addVerticAction,
  unselectVerticAction,
  selectVerticAction,
  createNewProjectAction,
  connectVerticAction,
  changeCoordsAction,
  deleteVerticAction,
} from '../../redux/actions/graphs';
import { selectLinks, selectVertics } from '../../redux/selectors/graph';
import { addVertic } from './helpers/addVertic';
import { selectVertic } from './helpers/selectVertic';
import { connectVertic } from './helpers/connectVertic';
import { selectToMoveVertic, mouseMoveEvent } from './helpers/moveVertic';
import { Coords } from '../../interfaces/coords';
import { deleteVertic } from './helpers/deleteVertic';
import { dfs } from './helpers/algorithmDfs';
import { bfs } from './helpers/algorithmBfs';

interface CanvasProps {
  btnType: string;
}

const Canvas: React.FC<CanvasProps> = ({ btnType }) => {
  const [startPoint, setStartPoint] = useState<Coords>();
  const [resultOfAlgorithm, setResultOfAlgorithm] = useState('');
  const dispatch = useDispatch();
  const links = useSelector(selectLinks);
  const vertics = useSelector(selectVertics);
  const ref = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);
  const mouseMove = (event: React.MouseEvent) => {
    if (btnType === 'move') {
      if (
        mouseMoveEvent(event, ref, vertics, startPoint, canvasCtxRef, links)
      ) {
        dispatch(
          changeCoordsAction(
            mouseMoveEvent(
              event,
              ref,
              vertics,
              startPoint,
              canvasCtxRef,
              links
            )!
          )
        );
      }
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
          dispatch(addVerticAction(addVertic(event, ref, ctx, vertics)!));
          break;
        case 'connect':
          if (selectVertic(event, ctx, vertics)) {
            dispatch(selectVerticAction(selectVertic(event, ctx, vertics)!));
          }
          break;
        case 'move':
          dispatch(
            selectVerticAction(
              selectToMoveVertic(event, ref, vertics, ctx, setStartPoint)!
            )
          );
          break;
        case 'delete':
          if (deleteVertic(event, ctx, vertics, links)) {
            dispatch(
              deleteVerticAction(deleteVertic(event, ctx, vertics, links)!)
            );
          }
          break;
        case 'dfs':
          const obj = {};
          const visited: string[] = [];
          dfs(event, links, obj, ctx, vertics, elem => {
            visited.push(elem);
          });
          if (visited.length) {
            setResultOfAlgorithm(`Порядок обхода: ${visited.join(' ')}`);
          }
          break;
        case 'bfs':
          const nodes = {};
          const visitedNodes: number[] = [];
          bfs(event, links, nodes, ctx, vertics, elem => {
            visitedNodes.push(elem);
          });
          if (visitedNodes.length) {
            setResultOfAlgorithm(`Порядок обхода: ${visitedNodes.join(' ')}`);
          }
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    dispatch(unselectVerticAction());
    setResultOfAlgorithm('');
  }, [btnType]);

  useEffect(() => {
    return () => {
      dispatch(createNewProjectAction());
    };
  }, [dispatch]);

  useEffect(() => {
    if (
      vertics.filter(
        (elem: IVertic) => elem.isSelectedFirst || elem.isSelectedSecond
      ).length === 2
    ) {
      if (connectVertic(vertics, links)) {
        dispatch(connectVerticAction(connectVertic(vertics, links)!));
      }
      dispatch(unselectVerticAction());
    }
    render(vertics, canvasCtxRef, ref, links);
  }, [vertics, links]);

  return (
    <div>
      <canvas
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
        onMouseMove={mouseMove}
        id='canvas'
        ref={ref}
        width='1100'
        height='570'
      />
      {resultOfAlgorithm.length && (
        <div className='result'>{resultOfAlgorithm}</div>
      )}
    </div>
  );
};

export default Canvas;
