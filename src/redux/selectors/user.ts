import { createSelector } from 'reselect';

const userState = (state: any) => state.userState;

export const selectUser = createSelector(userState, state => state.userData);
export const selectUserPhoto = createSelector(
  userState,
  state => state.photoUrl
);
