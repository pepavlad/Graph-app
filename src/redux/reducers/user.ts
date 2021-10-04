import { AnyAction } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { IVertic } from '../../interfaces/IVertic';
import { UserActionTypes } from '../actions/user';
import { User } from '../../interfaces/User';

export interface UserState {
  userData: User;
  photoUrl: string;
}

const initialState = {
  userData: {
    age: '',
    firstName: '',
    lastName: '',
  },
  photoUrl: '',
};

export const userReducer = createReducer<UserState>(initialState, {
  [UserActionTypes.SET_DATA]: (state: UserState, action: AnyAction) => ({
    ...state,
    userData: action.payload,
  }),
  [UserActionTypes.GET_PHOTO_URL]: (state: UserState, action: AnyAction) => ({
    ...state,
    photoUrl: action.payload,
  }),
});
