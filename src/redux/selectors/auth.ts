import { createSelector } from 'reselect';
import { TAuthState } from '../../interfaces/auth';

const authState = (state: TAuthState) => state.authState;

const selectSignInError = createSelector(authState, state => state.signInError);

export default selectSignInError;
