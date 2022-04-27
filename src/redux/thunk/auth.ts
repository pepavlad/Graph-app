import { Dispatch } from 'redux';
import * as AuthService from '../../services/auth';
import {
  signInAction,
  successSignInAction,
  errorSignInAction,
  registerAction,
  successRegisterAction,
  errorRegisterAction,
  signOutAction,
  successSignOutAction,
  errorSignOutAction,
} from '../actions/auth';

export const register = (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  age: string,
  history: any
) => {
  return (dispatch: Dispatch) => {
    dispatch(registerAction());
    AuthService.register(email, password, firstName, lastName, age)
      .then(() => {
        dispatch(successRegisterAction());
        history.push('/confirm');
      })
      .catch(error => {
        dispatch(errorRegisterAction(error.message));
      });
  };
};

export const signIn = (email: string, password: string, history: {
        push(url: string): void;
    }) => {
  return async (dispatch: Dispatch) => {
    dispatch(signInAction());
    AuthService.signIn(email, password)
      .then(() => {
        dispatch(successSignInAction());
        history.push('/');
      })
      .catch(error => {
        dispatch(errorSignInAction(error.message));
      });
  };
};
export const signOut = (history: {
        push(url: string): void;
    }) => {
  return (dispatch: Dispatch): void => {
    dispatch(signOutAction());
    AuthService.signOut()
      .then(() => {
        dispatch(successSignOutAction());
        history.push('/login');
      })
      .catch(error => {
        dispatch(errorSignOutAction(error.message));
      });
  };
};
