import { createAction } from 'redux-actions';
import { IVertic } from '../../interfaces/IVertic';

enum GraphsActionTypes {
  ADD_VERTIC = '[Graphs] ADD_VERTIC',
  SELECT_VERTIC = '[Graphs] SELECT_VERTIC',
  CONNECT_VERTICES = '[Graphs] CONNECT_VERTICES'
}

const addVerticAction = createAction(
  GraphsActionTypes.ADD_VERTIC,
  (payload: IVertic) => payload
);
const selectVerticAction = createAction(
  GraphsActionTypes.SELECT_VERTIC,
  (payload: IVertic) => payload
);
export {
  GraphsActionTypes,
  addVerticAction,
  selectVerticAction
};
