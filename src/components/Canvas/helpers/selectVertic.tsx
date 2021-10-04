import React from 'react';
import { Dispatch } from 'redux';
import { IVertic } from '../../../interfaces/IVertic';
import {
  selectVerticAction,
  unselectVerticAction,
} from '../../../redux/actions/graphs';

const select = (vertics: IVertic[], index: number) => {
  return vertics.filter(elem => elem.isSelectedFirst).length === 0
    ? vertics.map(elem =>
        elem.num === index ? { ...elem, isSelectedFirst: true } : elem
      )
    : vertics.map(elem =>
        elem.num === index ? { ...elem, isSelectedSecond: true } : elem
      );
};

const selectVertic = (
  event: React.MouseEvent,
  ctx: CanvasRenderingContext2D | null,
  vertics: IVertic[]
) => {
  return (dispatch: Dispatch) => {
    const elemLeft = ctx!.canvas.offsetLeft + ctx!.canvas.clientLeft;
    const elemTop = ctx!.canvas.offsetTop + ctx!.canvas.clientTop;
    const x = event.pageX - elemLeft + 1;
    const y = event.pageY - elemTop + 1;
    vertics.forEach(elem => {
      if (
        (x - elem.x) * (x - elem.x) + (y - elem.y) * (y - elem.y) <=
        16.5 * 16.5
      ) {
        if (elem.isSelectedFirst) {
          dispatch(unselectVerticAction());
          return;
        }
        dispatch(selectVerticAction(select(vertics, elem.num)));
      }
    });
  };
};

export default selectVertic;
