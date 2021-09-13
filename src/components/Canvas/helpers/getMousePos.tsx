import { MouseEvent } from 'react';

const getMousePos = (canvas: HTMLCanvasElement, event: MouseEvent) => {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
};

export default getMousePos;
