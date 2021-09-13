import { combineReducers } from 'redux';
import * as auth from './auth';
import * as graphs from './graphs'

const rootReducer = combineReducers({
  authState: auth.reducer,
  graphState: graphs.graphReducer
});
export interface AppState {
  authState: auth.State;
  graphState: graphs.GraphsState;
}

export default rootReducer;