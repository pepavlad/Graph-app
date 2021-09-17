import React from 'react';
import { IVertic } from '../../../interfaces/IVertic';
import getMousePos from './getMousePos';
import drawVertic from './drawVertic';

const draw = (
  event: React.MouseEvent<Element, MouseEvent>,
  ref: React.MutableRefObject<HTMLCanvasElement | null>,
  ctx: CanvasRenderingContext2D | null,
  vertics: IVertic[]
): IVertic | undefined => {
  if (ref.current) {
    const pos = getMousePos(ref.current, event);
    ctx!.beginPath();
    const circle = drawVertic(
      ctx,
      '#80deea',
      pos,
      vertics[vertics.length - 1] ? vertics[vertics.length - 1].num + 1 : 0
    );

    return {
      vertic: circle,
      x: pos.x,
      y: pos.y,
      num: vertics[vertics.length - 1]
        ? vertics[vertics.length - 1].num + 1
        : 0,
      isSelectedFirst: false,
      isSelectedSecond: false,
    };
  }
};

export default draw;
