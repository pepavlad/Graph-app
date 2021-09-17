import { combineReducers } from 'redux';
import * as auth from './auth';
import * as graphs from './graphs'
import * as user from './user'

const rootReducer = combineReducers({
  authState: auth.reducer,
  graphState: graphs.graphReducer,
  userState: user.userReducer
});

export default rootReducer;