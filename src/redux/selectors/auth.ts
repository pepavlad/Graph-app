import { createSelector } from 'reselect';
import { AppState } from '../reducers';

const authState = (state: AppState) => state.authState;

const selectSignInError = createSelector(authState, state => state.signInError);

export default selectSignInError;
