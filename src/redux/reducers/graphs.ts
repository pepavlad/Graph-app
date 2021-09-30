import { AnyAction } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { IVertic } from '../../interfaces/IVertic';
import { GraphsActionTypes } from '../actions/graphs';

export interface GraphsState {
  graphNames?: string[];
  isLoading?: boolean;
  vertics: IVertic[];
  links: number[][];
}

const initialState = {
  graphNames: [],
  isLoading: false,
  vertics: [],
  links: [],
};

export const graphReducer = createReducer<GraphsState>(initialState, {
  [GraphsActionTypes.ADD_VERTIC]: (state: GraphsState, action: AnyAction) => ({
    ...state,
    vertics: [...state.vertics, action.payload],
  }),
  [GraphsActionTypes.CREATE_NEW_PROJECT]: (state: GraphsState) => ({
    ...state,
    vertics: [],
    links: [],
  }),
  [GraphsActionTypes.SET_LOADING]: (state: GraphsState, action: AnyAction) => ({
    ...state,
    isLoading: action.payload,
  }),
  [GraphsActionTypes.CONNECT_VERTICES]: (
    state: GraphsState,
    action: AnyAction
  ) => ({
    ...state,
    links: [...state.links, action.payload],
  }),
  [GraphsActionTypes.DELETE_VERTIC]: (
    state: GraphsState,
    action: AnyAction
  ) => ({
    ...state,
    links: action.payload.links,
    vertics: state.vertics.filter(elem => elem.num !== action.payload.index),
  }),
  [GraphsActionTypes.UNSELECT_VERTICES]: (state: GraphsState) => ({
    ...state,
    vertics: state.vertics.map((vertic: IVertic) => {
      return { ...vertic, isSelectedFirst: false, isSelectedSecond: false };
    }),
  }),
  [GraphsActionTypes.SELECT_VERTIC]: (
    state: GraphsState,
    action: AnyAction
  ) => ({
    ...state,
    vertics: action.payload,
  }),
  [GraphsActionTypes.CHANGE_COORDS]: (
    state: GraphsState,
    action: AnyAction
  ) => ({
    ...state,
    vertics: action.payload,
  }),
  [GraphsActionTypes.DOWNLOAD_GRAPH]: (
    state: GraphsState,
    action: AnyAction
  ) => ({
    ...state,
    vertics: action.payload.vertics,
    links: action.payload.links,
  }),
  [GraphsActionTypes.GET_ALL_GRAPHS]: (
    state: GraphsState,
    action: AnyAction
  ) => ({
    ...state,
    graphNames: action.payload,
  }),
});
