import React from 'react';
import { Dispatch } from 'redux';
import { IVertic } from '../../../interfaces/IVertic';
import { selectVerticAction } from '../../../redux/actions/graphs';

const select = (vertics: IVertic[], index: number) => {
  return vertics.filter(elem => elem.isSelectedFirst).length === 0
    ? vertics.map((elem, idx) =>
        idx === index ? { ...elem, isSelectedFirst: true } : elem
      )
    : vertics.map((elem, idx) =>
        idx === index ? { ...elem, isSelectedSecond: true } : elem
      );
};

const selectVertic = (
  event: React.MouseEvent,
  ctx: CanvasRenderingContext2D | null,
  vertics: IVertic[],
  dispatch: Dispatch
) => {
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
      dispatch(selectVerticAction(select(vertics, elem.num)));
    }
  });
};

export default selectVertic;
