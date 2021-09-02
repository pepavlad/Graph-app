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

export const register = (email: string, password: string, firstName: string, lastName: string, age: string, history: any) =>{
  return (dispatch: Dispatch) => {
    dispatch(registerAction());
    AuthService.register(email, password, firstName, lastName, age)
    .then(() => {
      dispatch(successRegisterAction());
      history.push('/confirm')
    })
    .catch((err) => {
      dispatch(errorRegisterAction(err.message))
    })
  }
}

export const signIn = (email: string, password: string, history: any) =>{
  return (dispatch: Dispatch) => {
    dispatch(signInAction());
    AuthService.signIn(email, password)
    .then(() => {
      dispatch(successSignInAction());
      history.push('/')
    })
    .catch((err) => {
      dispatch(errorSignInAction(err.message))      
    })
  }
}
export const signOut = (history: any) =>{
  return (dispatch: Dispatch) => {
    dispatch(signOutAction());
    AuthService.signOut()
    .then(() => {
      dispatch(successSignOutAction());
      history.push('/login')
    })
    .catch((err) => {
      dispatch(errorSignOutAction(err.message))
    })
  }
}
// export const checkUser = (history = null, path = null) => {
//   return (dispatch: Dispatch) => {
//     AuthService.checkUser()
//       .then((res) => {
//         return res.json();
//       })
//       .then((res) => {
//         dispatch(validTokenAction(res));
//         localStorage.setItem("validToken", true);
//         history && history.push(path);
//       })
//       .catch(() => {
//         dispatch(notValidTokenAction());
//         localStorage.removeItem("validToken");
//         history && history.push("/login");
//       });
//   };
// };