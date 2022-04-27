import { AnyAction } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { UserActionTypes } from '../actions/user';
import { User } from '../../interfaces/User';

export interface UserState {
  userData: User;
  photoUrl: string;
  photoUrlError: string;
  isLoading: boolean;
}

const initialState = {
  userData: {
    age: '',
    firstName: '',
    lastName: '',
  },
  photoUrl: '',
  photoUrlError: '',
  isLoading: false
};

export const userReducer = createReducer<UserState>(initialState, {
  [UserActionTypes.SET_DATA]: (state: UserState, action: AnyAction) => ({
    ...state,
    userData: action.payload,
    isLoading: true
  }),
  [UserActionTypes.GET_PHOTO_URL]: (state: UserState, action: AnyAction) => ({
    ...state,
    photoUrl: action.payload,
  }),
  [UserActionTypes.ERROR_PHOTO_URL]: (state: UserState, action: AnyAction) => ({
    ...state,
    photoUrlError: action.payload,
  }),
  [UserActionTypes.SUCCESS_PHOTO_URL]: (state: UserState, action: AnyAction) => ({
    ...state,
    photoUrlError: action.payload,
    isLoading: false
  }),
});
