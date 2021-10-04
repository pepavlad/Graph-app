import { createAction } from 'redux-actions';
import { Coords } from '../../interfaces/coords';
import { IVertic } from '../../interfaces/IVertic';

enum GraphsActionTypes {
  ADD_VERTIC = '[Graphs] ADD_VERTIC',
  SELECT_VERTIC = '[Graphs] SELECT_VERTIC',
  UNSELECT_VERTICES = '[Graphs] UNSELECT_VERTIC',
  CONNECT_VERTICES = '[Graphs] CONNECT_VERTICES',
  CHANGE_COORDS = '[Graphs] CHANGE_COORDS',
  DELETE_VERTIC = '[Graphs] DELETE_VERTIC',
  CREATE_NEW_PROJECT = '[Graphs] CREATE_NEW_PROJECT',
  DOWNLOAD_GRAPH = '[Graphs] DOWNLOAD_GRAPH',
  GET_ALL_GRAPHS = '[Graphs] GET_ALL_GRAPHS',
  SET_LOADING = '[Graphs] SET_LOADING',
  DELETE_GRAPH = '[Graphs] DELETE_GRAPH',
}

const addVerticAction = createAction(
  GraphsActionTypes.ADD_VERTIC,
  (payload: IVertic) => payload
);
const setLoadingAction = createAction(
  GraphsActionTypes.SET_LOADING,
  (payload: boolean) => payload
);
const downloadGraphAction = createAction(
  GraphsActionTypes.DOWNLOAD_GRAPH,
  (payload: { vertics: IVertic[]; links: number[][] }) => payload
);
const getAllGraphsAction = createAction(
  GraphsActionTypes.GET_ALL_GRAPHS,
  (payload: string[]) => payload
);
const deleteGraphAction = createAction(
  GraphsActionTypes.DELETE_GRAPH,
  (payload: string) => payload
);

const createNewProjectAction = createAction(
  GraphsActionTypes.CREATE_NEW_PROJECT
);
const changeCoordsAction = createAction(
  GraphsActionTypes.CHANGE_COORDS,
  (payload: IVertic[]) => payload
);
const deleteVerticAction = createAction(
  GraphsActionTypes.DELETE_VERTIC,
  (payload: { index: number; links: number[][] }) => payload
);
const connectVerticAction = createAction(
  GraphsActionTypes.CONNECT_VERTICES,
  (payload: number[]) => payload
);
const selectVerticAction = createAction(
  GraphsActionTypes.SELECT_VERTIC,
  (payload: IVertic[]) => payload
);
const unselectVerticAction = createAction(GraphsActionTypes.UNSELECT_VERTICES);
export {
  GraphsActionTypes,
  deleteGraphAction,
  addVerticAction,
  downloadGraphAction,
  createNewProjectAction,
  getAllGraphsAction,
  selectVerticAction,
  connectVerticAction,
  unselectVerticAction,
  changeCoordsAction,
  setLoadingAction,
  deleteVerticAction,
};
