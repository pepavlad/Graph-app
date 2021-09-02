import { AnyAction } from 'redux'
import { createReducer } from '@reduxjs/toolkit';
import { AuthActionTypes } from "../actions/auth";
export interface State {
	signInError: string;
	registerError: string;
	signOutError: string;
	isLoading: boolean;
}

const initialState = {
	signInError: '',
	registerError: '',
	signOutError: '',
	isLoading: false,
}

export const reducer = createReducer(initialState,
  {
    [AuthActionTypes.SIGNING_IN]: (state: State) => ({
      ...state,
      isLoading: true,
    }),
    [AuthActionTypes.SUCCESS_SIGN_IN]: (state: State) => ({
      ...state,
		  signInError: '',
      isLoading: false,
    }),
    [AuthActionTypes.ERROR_SIGN_IN]: (state: State,  action: AnyAction) => ({
      ...state,
	    signInError: action.payload,
      isLoading: false,
    }),
    [AuthActionTypes.SIGNING_OUT]: (state: State) => ({
      ...state,
      isLoading: true,
    }),
    [AuthActionTypes.SUCCESS_SIGN_OUT]: (state: State) => ({
        ...state,
		signOutError: '',
        isLoading: false,
    }),
    [AuthActionTypes.ERROR_SIGN_OUT]: (state: State,  action: AnyAction) => ({
      ...state,
	  signInError: action.payload,
      isLoading: false,
    }),
    [AuthActionTypes.REGISTER]: (state: State) => ({
      ...state,
      isLoading: true,
    }),
    [AuthActionTypes.SUCCESS_REGISTER]: (state: State) => ({
      ...state,
      registerError: '',
      isLoading: false,
    }),
    [AuthActionTypes.ERROR_REGISTER]: (state: State, action: AnyAction) => ({
      ...state,
      registerError: action.payload,
      isLoading: false,
    }),
  }
);