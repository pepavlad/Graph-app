import React from 'react';
import { IVertic } from '../../../interfaces/IVertic';
import { Coords } from '../../../interfaces/coords';
import getMousePos from './getMousePos';

const getNodeByPos = (
  event: React.MouseEvent<Element, MouseEvent>,
  vertics: IVertic[],
  ctx: CanvasRenderingContext2D | null
) => {
  const elemLeft = ctx!.canvas.offsetLeft + ctx!.canvas.clientLeft;
  const elemTop = ctx!.canvas.offsetTop + ctx!.canvas.clientTop;
  const x = event.pageX - elemLeft + 1;
  const y = event.pageY - elemTop + 1;
  const [verticToMove] = vertics.filter(
    elem =>
      (x - elem.x) * (x - elem.x) + (y - elem.y) * (y - elem.y) <= 16.5 * 16.5
  );
  return verticToMove;
};

export const selectToMoveVertic = (
  event: React.MouseEvent,
  ref: React.MutableRefObject<HTMLCanvasElement | null>,
  vertics: IVertic[],
  ctx: CanvasRenderingContext2D | null,
  setStartPoint: React.Dispatch<React.SetStateAction<Coords | undefined>>
) => {
  if (ref.current) {
    const pos = getMousePos(ref.current, event);
    const vertic = getNodeByPos(event, vertics, ctx);
    if (vertic !== undefined) {
      const newVertics = vertics.map(vert =>
        vert.num === vertic.num ? { ...vert, isSelectedFirst: true } : vert
      );
      setStartPoint({ x: pos.x - vertic.x, y: pos.y - vertic.y });
      return newVertics;
    }
    return vertics;
  }
};

export const mouseMoveEvent = (
  event: React.MouseEvent,
  ref: React.MutableRefObject<HTMLCanvasElement | null>,
  vertics: IVertic[],
  startPoint: Coords | undefined,
  canvasCtxRef: React.MutableRefObject<CanvasRenderingContext2D | null>,
  links: number[][]
) => {
  if (ref.current && startPoint) {
    const pos = getMousePos(ref.current, event);
    const [vertic] = vertics.filter(elem => elem.isSelectedFirst);
    if (vertic !== undefined) {
      const verticWithNewCoords = vertics.map(elem =>
        elem.num === vertic.num
          ? { ...elem, x: pos.x - startPoint.x, y: pos.y - startPoint.y }
          : elem
      );
      return verticWithNewCoords;
    }
  }
};
