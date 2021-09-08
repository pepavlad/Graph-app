import React from 'react';
import { IVertic } from '../interfaces/IVertic';
import drawVertic from './drawVertic';

const drawConnect = (
  ref: React.MutableRefObject<HTMLCanvasElement | null>,
  canvasCtxRef: React.MutableRefObject<CanvasRenderingContext2D | null>,
  toConnectVertics: IVertic[]
) => {
  if (ref.current) {
    canvasCtxRef.current = ref.current.getContext('2d');
    const firstVertic = toConnectVertics[0];
    const secondVertic = toConnectVertics[1];
    const ctx = canvasCtxRef.current;
    ctx!.beginPath();
    ctx!.moveTo(firstVertic.x, firstVertic.y);
    ctx!.lineTo(secondVertic.x, secondVertic.y);
    ctx!.stroke();
    drawVertic(ctx, '#80deea', firstVertic, firstVertic.num);
    drawVertic(ctx, '#80deea', secondVertic, secondVertic.num);
  }
};

export default drawConnect;
