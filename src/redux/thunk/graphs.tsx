import React from 'react';
import { Dispatch } from 'redux';
import * as GraphService from '../../services/graphs';
import { IVertic } from '../../interfaces/IVertic';
import {
  addVerticAction,
  selectVerticAction,
  connectVerticAction,
  unselectVerticAction,
} from '../actions/graphs';

export const addVertic = (
  event: React.MouseEvent,
  ref: React.MutableRefObject<HTMLCanvasElement | null>,
  ctx: CanvasRenderingContext2D | null,
  numOfVertic: number,
  setNumOfVertic: (value: number) => void
) => {
  return (dispatch: Dispatch) => {
    dispatch(addVerticAction(GraphService.draw(event, ref, ctx, numOfVertic)!));
    setNumOfVertic(numOfVertic + 1);
  };
};
export const unselectVertices = () => {
  return (dispatch: Dispatch) => {
    dispatch(unselectVerticAction());
  };
};
export const selectVertic = (
  event: React.MouseEvent,
  ctx: CanvasRenderingContext2D | null,
  vertics: IVertic[]
) => {
  return (dispatch: Dispatch) => {
    const elemLeft = ctx!.canvas.offsetLeft + ctx!.canvas.clientLeft;
    const elemTop = ctx!.canvas.offsetTop + ctx!.canvas.clientTop;
    vertics.forEach(elem => {
      if (
        ctx!.isPointInPath(
          elem.vertic,
          event.pageX - elemLeft + 1,
          event.pageY - elemTop + 1
        )
      ) {
        dispatch(selectVerticAction(GraphService.select(vertics, elem.num)));
      }
    });
  };
};

export const connectVertic = (vertics: IVertic[], links: number[][]) => {
  return (dispatch: Dispatch) => {
    const [firstVert, secondVert] = GraphService.connect(vertics);
    if (
      !links.some(
        ([first, second]) =>
          (first === firstVert && second === secondVert) ||
          (first === secondVert && second === firstVert)
      )
    ) {
      dispatch(connectVerticAction(GraphService.connect(vertics)));
    }
  };
};
