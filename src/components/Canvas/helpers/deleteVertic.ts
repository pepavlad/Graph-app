import React from 'react';
import { IVertic } from '../../../interfaces/IVertic';

export const deleteVertic = (
  event: React.MouseEvent,
  ctx: CanvasRenderingContext2D | null,
  vertics: IVertic[],
  links: number[][]
) => {
  const elemLeft = ctx!.canvas.offsetLeft + ctx!.canvas.clientLeft;
  const elemTop = ctx!.canvas.offsetTop + ctx!.canvas.clientTop;
  const x = event.pageX - elemLeft + 1;
  const y = event.pageY - elemTop + 1;
  const [verticToDelete] = vertics.filter(
    elem =>
      (x - elem.x) * (x - elem.x) + (y - elem.y) * (y - elem.y) <= 16.5 * 16.5
  );
  if (verticToDelete) {
    const newLinks = links.filter(
      link => link.indexOf(verticToDelete.num) === -1
    );
    return { index: verticToDelete.num, links: newLinks };
  }
};
