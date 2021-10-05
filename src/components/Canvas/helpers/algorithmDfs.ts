import React from 'react';
import { IVertic } from '../../../interfaces/IVertic';

export const visit = (
  obj: {
    [key: string]: { [key: string]: {} };
  },
  fn: (elem: string) => void,
  visited: string[]
) => {
  Object.keys(obj).forEach(elem => {
    if (visited.indexOf(elem) === -1) {
      visited.push(elem);
      fn(elem);
      visit(obj[elem], fn, visited);
    }
  });
};

export const dfs = (
  event: React.MouseEvent,
  links: number[][],
  obj: {
    [key: string]: { [key: string]: {} };
  },
  ctx: CanvasRenderingContext2D | null,
  vertics: IVertic[],
  fn: (elem: string) => void
) => {
  const flatArr = links.flat();
  const verticsId = [...Array.from(new Set(flatArr))];
  const elemLeft = ctx!.canvas.offsetLeft + ctx!.canvas.clientLeft;
  const elemTop = ctx!.canvas.offsetTop + ctx!.canvas.clientTop;
  const x = event.pageX - elemLeft + 1;
  const y = event.pageY - elemTop + 1;
  verticsId.forEach(elem => {
    obj[elem.toString()] = {};
  });
  const [startVertic] = vertics.filter(
    elem =>
      (x - elem.x) * (x - elem.x) + (y - elem.y) * (y - elem.y) <= 16.5 * 16.5
  );
  links.forEach((link: number[]) => {
    obj[link[0]][link[1]] = obj[link[1]];
    obj[link[1]][link[0]] = obj[link[0]];
  });
  const nodes: { [key: string]: {} } = {};
  if (startVertic) {
    nodes[startVertic.num] = obj[startVertic.num];
    visit(nodes, fn, []);
  }
};
