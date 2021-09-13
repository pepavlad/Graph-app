import React from 'react';
import { Dispatch } from 'redux';
import { IVertic } from '../../../interfaces/IVertic';
import { deleteVerticAction } from '../../../redux/actions/graphs';

const deleteVertic = (
  event: React.MouseEvent,
  ctx: CanvasRenderingContext2D | null,
  vertics: IVertic[],
  links: number[][]
) => {
  return (dispatch: Dispatch) => {
    const elemLeft = ctx!.canvas.offsetLeft + ctx!.canvas.clientLeft;
    const elemTop = ctx!.canvas.offsetTop + ctx!.canvas.clientTop;
    const x = event.pageX - elemLeft + 1;
    const y = event.pageY - elemTop + 1;
    const [verticToDelete] = vertics.filter(
      elem =>
        (x - elem.x) * (x - elem.x) + (y - elem.y) * (y - elem.y) <= 16.5 * 16.5
    );
    const newLinks = links.filter(
      link => link.indexOf(verticToDelete.num) === -1
    );
    dispatch(
      deleteVerticAction({ index: verticToDelete.num, links: newLinks })
    );
  };
};
export default deleteVertic;
