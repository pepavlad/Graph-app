import React from 'react';
import { IVertic } from '../interfaces/IVertic';
import drawVertic from './drawVertic';

const render = (
  vertics: IVertic[],
  canvasCtxRef: React.MutableRefObject<CanvasRenderingContext2D | null>,
  ref: React.MutableRefObject<HTMLCanvasElement | null>,
  links: number[][]
) => {
  if (ref.current) {
    const ctx = canvasCtxRef.current;
    if (ctx !== null) {
      ctx!.clearRect(0, 0, ref.current.width, ref.current.height);
    }
    if (links.length) {
      links.forEach(link => {
        if (link.length === 2) {
          const firstVertic = link[0];
          const secondVertic = link[1];
          ctx!.fillStyle = '#4fc3f7';
          ctx!.lineWidth = 2;
          ctx!.beginPath();
          ctx!.moveTo(vertics[firstVertic].x, vertics[firstVertic].y);
          ctx!.lineTo(vertics[secondVertic].x, vertics[secondVertic].y);
          ctx!.stroke();
        }
      });
    }
    vertics.forEach(elem => {
      const isSelected = elem.isSelectedFirst || elem.isSelectedSecond;
      const color = isSelected ? '#4fc3f7' : '#80deea';
      drawVertic(ctx, color, elem, elem.num);
    });
  }
};

export default render;
