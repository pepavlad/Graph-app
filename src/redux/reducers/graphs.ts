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
  links: [[]],
};

export const graphReducer = createReducer<GraphsState>(initialState, {
  [GraphsActionTypes.ADD_VERTIC]: (state: GraphsState, action: AnyAction) => ({
    ...state,
    vertics: [...state.vertics, action.payload],
  }),
  [GraphsActionTypes.CONNECT_VERTICES]: (
    state: GraphsState,
    action: AnyAction
  ) => ({
    ...state,
    links: [...state.links, action.payload],
  }),
  [GraphsActionTypes.UNSELECT_VERTICES]: (
    state: GraphsState,
  ) => ({
    ...state,
    vertics: state.vertics.map((vertic: IVertic) => {return {...vertic, isSelectedFirst: false, isSelectedSecond: false}}),
  }),
  [GraphsActionTypes.SELECT_VERTIC]: (
    state: GraphsState,
    action: AnyAction
  ) => ({
    ...state,
    vertics: action.payload
  }),
});
