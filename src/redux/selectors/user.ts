import { createSelector } from 'reselect';

const userState = (state: any) => state.userState;

const selectUser = createSelector(userState, state => state.userData);

export default selectUser; 
