import { AnyAction } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { IVertic } from '../../interfaces/IVertic';
import { GraphsActionTypes } from '../actions/graphs';

export interface GraphsState {
  vertics: IVertic[];
  links: number[][];
}

const initialState = {
  vertics: [],
  links: [[]]
};

export const graphReducer = createReducer<GraphsState>(initialState, {
  [GraphsActionTypes.ADD_VERTIC]: (state: GraphsState, action: AnyAction) => ({
	...state,
    vertics:[...state.vertics, action.payload]
  }),
});
