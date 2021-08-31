import { Dispatch } from "redux";

import * as AuthService from "../../services/auth";
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
} from "../actions/auth";

export const register = (email: string, password: string, firstName: string, lastName: string, birthDate: string) =>{
  return (dispatch: Dispatch) => {
    dispatch(registerAction());
    AuthService.register(email, password, firstName, lastName, birthDate)
    .then(() => {
      dispatch(successRegisterAction());
      //history.push('/login')
    })
    .catch((err) => {
      dispatch(errorRegisterAction(err.message))
    })
  }
}

export const signIn = (email: string, password: string) =>{
  return (dispatch: Dispatch) => {
    dispatch(signInAction());
    AuthService.signIn(email, password)
    .then(() => {
      dispatch(successSignInAction());
      //history.push('/login')
    })
    .catch((err) => {
      dispatch(errorSignInAction(err.message))
    })
  }
}
export const signOut = () =>{
  return (dispatch: Dispatch) => {
    dispatch(signOutAction());
    AuthService.signOut()
    .then(() => {
      dispatch(successSignOutAction());
      //history.push('/login')
    })
    .catch((err) => {
      dispatch(errorSignOutAction(err.message))
    })
  }
}