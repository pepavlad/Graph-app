import React from 'react';
import { IVertic } from '../../../interfaces/IVertic';

const select = (vertics: IVertic[], vertic: IVertic) => {
  if (vertic.isSelectedFirst) {
    return vertics.map(elem =>
      elem.num === vertic.num ? { ...elem, isSelectedFirst: false } : elem
    );
  }
  if (vertics.filter(elem => elem.isSelectedFirst).length) {
    return vertics.map(elem =>
      elem.num === vertic.num ? { ...elem, isSelectedSecond: true } : elem
    );
  }
  if (!vertic.isSelectedFirst && !vertic.isSelectedSecond) {
    return vertics.map(elem =>
      elem.num === vertic.num ? { ...elem, isSelectedFirst: true } : elem
    );
  }
};

export const selectVertic = (
  event: React.MouseEvent,
  ctx: CanvasRenderingContext2D | null,
  vertics: IVertic[]
) => {
  const elemLeft = ctx!.canvas.offsetLeft + ctx!.canvas.clientLeft;
  const elemTop = ctx!.canvas.offsetTop + ctx!.canvas.clientTop;
  const x = event.pageX - elemLeft + 1;
  const y = event.pageY - elemTop + 1;
  const [selectedVertic] = vertics.filter(
    elem =>
      (x - elem.x) * (x - elem.x) + (y - elem.y) * (y - elem.y) <= 16.5 * 16.5
  );
  if (selectedVertic) {
    return select(vertics, selectedVertic);
  }
};
