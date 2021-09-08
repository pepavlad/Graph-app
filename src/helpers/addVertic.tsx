import React from 'react';
import getMousePos from './getMousePos';
import { IVertic } from '../interfaces/IVertic';
import drawVertic from './drawVertic';

const draw = (
  event: React.MouseEvent,
  ref: React.MutableRefObject<HTMLCanvasElement | null>,
  ctx: CanvasRenderingContext2D | null,
  numOfVertic: number,
  setNumOfVertic: (value: number) => void,
  vertics: IVertic[],
  setVirtics: React.Dispatch<React.SetStateAction<IVertic[]>>
) => {
  if (ref.current) {
    const pos = getMousePos(ref.current, event);
    ctx!.beginPath();
    const circle = drawVertic(ctx, '#80deea', pos, numOfVertic);
    setVirtics([
      ...vertics,
      {
        vertic: circle,
        x: pos.x,
        y: pos.y,
        num: numOfVertic,
        isSelected: false,
      },
    ]);
    setNumOfVertic(numOfVertic + 1);
  }
};

export default draw;
