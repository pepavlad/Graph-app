import React from 'react';
import { Dispatch } from 'redux';
import draw from '../../services/graphs';
import {
  addVerticAction
} from '../actions/graphs';

const addVertic = (
  event: React.MouseEvent,
  ref: React.MutableRefObject<HTMLCanvasElement | null>,
  ctx: CanvasRenderingContext2D | null,
  numOfVertic: number,
  setNumOfVertic: (value: number) => void
) => {
  return (dispatch: Dispatch) => {
        dispatch(addVerticAction(draw(event, ref, ctx, numOfVertic)!));
        setNumOfVertic(numOfVertic + 1);
  };
};

export default addVertic;