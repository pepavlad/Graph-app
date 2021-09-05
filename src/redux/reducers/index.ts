import { combineReducers } from 'redux';
import * as auth from './auth';

export const rootReducer = combineReducers({
	authState: auth.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
