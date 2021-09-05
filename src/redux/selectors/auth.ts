import { createSelector } from 'reselect';

const authState = (state: any) => state.authState;

const selectSignInError = createSelector(authState, state => state.signInError);

export default selectSignInError;
