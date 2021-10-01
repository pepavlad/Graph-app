import React from 'react';
import { IVertic } from '../../../interfaces/IVertic';
import drawVertic from './drawVertic';

const render = (
  vertics: IVertic[],
  canvasCtxRef: React.MutableRefObject<CanvasRenderingContext2D | null>,
  ref: React.MutableRefObject<HTMLCanvasElement | null>,
  links: number[][]
) => {
  if (ref.current) {
    canvasCtxRef.current = ref.current.getContext('2d');
    const ctx = canvasCtxRef.current;
    ctx!.clearRect(0, 0, ref.current.width, ref.current.height);
    if (links) {
      links.forEach(link => {
        if (link.length === 2) {
          const firstPoint = link[0];
          const secondPoint = link[1];
          const [firstVertic] = vertics.filter(elem => elem.num === firstPoint);
          const [secondVertic] = vertics.filter(
            elem => elem.num === secondPoint
          );
          ctx!.fillStyle = '#4fc3f7';
          ctx!.lineWidth = 2;
          ctx!.beginPath();
          ctx!.moveTo(firstVertic.x, firstVertic.y);
          ctx!.lineTo(secondVertic.x, secondVertic.y);
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
