import React from 'react';
import { IVertic } from '../interfaces/IVertic';
import getMousePos from '../helpers/getMousePos';
import drawVertic from '../helpers/drawVertic';

const draw = (
  event: React.MouseEvent<Element, MouseEvent>,
  ref: React.MutableRefObject<HTMLCanvasElement | null>,
  ctx: CanvasRenderingContext2D | null,
  numOfVertic: number,
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
		  isSelected: false
	  }
  }
};

export default draw;