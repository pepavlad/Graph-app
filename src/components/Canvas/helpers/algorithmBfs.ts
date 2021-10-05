import React from 'react';
import { IVertic } from '../../../interfaces/IVertic';

export const bfs = (
  event: React.MouseEvent,
  links: number[][],
  nodes: { [key: string]: number[] },
  ctx: CanvasRenderingContext2D | null,
  vertics: IVertic[],
  fn: (elem: number) => void
) => {
  const flatArr = links.flat();
  const verticsId = [...Array.from(new Set(flatArr))];
  const elemLeft = ctx!.canvas.offsetLeft + ctx!.canvas.clientLeft;
  const elemTop = ctx!.canvas.offsetTop + ctx!.canvas.clientTop;
  const x = event.pageX - elemLeft + 1;
  const y = event.pageY - elemTop + 1;
  verticsId.forEach(elem => {
    nodes[elem.toString()] = [];
  });
  links.forEach((link: number[]) => {
    nodes[link[0]].push(link[1]);
    nodes[link[1]].push(link[0]);
  });
  const [startVertic] = vertics.filter(
    elem =>
      (x - elem.x) * (x - elem.x) + (y - elem.y) * (y - elem.y) <= 16.5 * 16.5
  );
  if (startVertic) {
    const visited: boolean[] = [];
    const queue: number[] = [startVertic.num];
    visited[startVertic.num] = true;
    fn(startVertic.num);
    while (queue.length > 0) {
      const currentVerticId: number | undefined = queue.shift();
      if (currentVerticId) {
        const currentVertic = nodes[currentVerticId];
        currentVertic.forEach((elem, index) => {
          const target = currentVertic[index];
          if (!visited[target]) {
            visited[target] = true;
            queue.push(target);
            fn(target);
          }
        });
      }
    }
  }
};
