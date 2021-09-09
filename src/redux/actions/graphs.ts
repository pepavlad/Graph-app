import { createAction } from 'redux-actions';
import { IVertic } from '../../interfaces/IVertic';

enum GraphsActionTypes {
  ADD_VERTIC = '[Graphs] ADD_VERTIC',
  SELECT_VERTIC = '[Graphs] SELECT_VERTIC',
  UNSELECT_VERTICES = '[Graphs] UNSELECT_VERTIC',
  CONNECT_VERTICES = '[Graphs] CONNECT_VERTICES'
}

const addVerticAction = createAction(
  GraphsActionTypes.ADD_VERTIC,
  (payload: IVertic) => payload
);
const connectVerticAction = createAction(
  GraphsActionTypes.CONNECT_VERTICES,
  (payload: number[]) => payload
);
const selectVerticAction = createAction(
  GraphsActionTypes.SELECT_VERTIC, 
  (payload: IVertic[]) => payload
);
const unselectVerticAction = createAction(
  GraphsActionTypes.UNSELECT_VERTICES
);
export {
  GraphsActionTypes,
  addVerticAction,
  selectVerticAction,
  connectVerticAction,
  unselectVerticAction
};
