import React from 'react';
import { IVertic } from '../interfaces/IVertic';
import getMousePos from '../helpers/getMousePos';
import drawVertic from '../helpers/drawVertic';

export const draw = (
  event: React.MouseEvent<Element, MouseEvent>,
  ref: React.MutableRefObject<HTMLCanvasElement | null>,
  ctx: CanvasRenderingContext2D | null,
  numOfVertic: number
): IVertic | undefined => {
  if (ref.current) {
    const pos = getMousePos(ref.current, event);
    ctx!.beginPath();
    const circle = drawVertic(ctx, '#80deea', pos, numOfVertic);
    return {
      vertic: circle,
      x: pos.x,
      y: pos.y,
      num: numOfVertic,
      isSelected: false,
      isSelectedFirst: false,
      isSelectedSecond: false,
    };
  }
};
export const select = (vertics: IVertic[], index: number) => {
  return vertics.filter(elem => elem.isSelectedFirst).length === 0
    ? vertics.map((elem, idx) =>
        idx === index ? { ...elem, isSelectedFirst: true } : elem
      )
    : vertics.map((elem, idx) =>
        idx === index ? { ...elem, isSelectedSecond: true } : elem
      );
};
export const connect = (vertics: IVertic[]) => {
  const [firstVert] = vertics.filter(elem => elem.isSelectedFirst);
  const [secondVert] = vertics.filter(elem => elem.isSelectedSecond);
  return [firstVert.num, secondVert.num];
};
