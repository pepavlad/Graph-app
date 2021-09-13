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
}

const addVerticAction = createAction(
  GraphsActionTypes.ADD_VERTIC,
  (payload: IVertic) => payload
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
  addVerticAction,
  selectVerticAction,
  connectVerticAction,
  unselectVerticAction,
  changeCoordsAction,
  deleteVerticAction,
};
