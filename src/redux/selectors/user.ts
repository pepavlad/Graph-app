import { createSelector } from 'reselect';
import { TUserState } from '../../interfaces/user';

const userState = (state: TUserState) => state.userState;

export const selectUser = createSelector(userState, state => state.userData);
export const selectIsLoadingPhoto = createSelector(userState, state => state.isLoading);
export const selectPhotoUrlError = createSelector(userState, state => state.photoUrlError);
export const selectUserPhoto = createSelector(
  userState,
  state => state.photoUrl
);
