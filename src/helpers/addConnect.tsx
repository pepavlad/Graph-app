import React from 'react';
import { IVertic } from '../interfaces/IVertic';
import drawVertic from './drawVertic';

const connectVert = (
  event: React.MouseEvent,
  ctx: CanvasRenderingContext2D | null,
  vertics: IVertic[],
  setToConnectVertics: React.Dispatch<React.SetStateAction<IVertic[]>>
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
      if (elem.isSelected) {
        ctx!.beginPath();
        ctx!.arc(elem.x - 10, elem.y - 16.5, 18.1, 0, 2 * Math.PI);
        ctx!.fill();
        ctx!.arc(elem.x - 10, elem.y - 16.5, 18, 0, 2 * Math.PI);
        ctx!.stroke();
        drawVertic(ctx, '#80deea', elem, elem.num);
        setToConnectVertics([]);
        elem.isSelected = false;
        return;
      }
      const circle = drawVertic(ctx, '#4fc3f7', elem, elem.num);
      setToConnectVertics(toConnectVertics => [
        ...toConnectVertics,
        {
          vertic: circle,
          x: elem.x,
          y: elem.y,
          num: elem.num,
        },
      ]);
      elem.isSelected = true;
    }
  });
};
export default connectVert;
