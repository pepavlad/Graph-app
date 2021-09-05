import { createAction } from 'redux-actions';

enum AuthActionTypes {
	SIGNING_IN = '[Auth] SIGNING_IN',
	SUCCESS_SIGN_IN = '[Auth] SUCCESS_SIGN_IN',
	ERROR_SIGN_IN = '[Auth] ERROR_SIGN_IN',

	REGISTER = '[Auth] REGISTER',
	SUCCESS_REGISTER = '[Auth] SUCCESS_REGISTER',
	ERROR_REGISTER = '[Auth] ERROR_REGISTER',

	SIGNING_OUT = '[Auth] SIGNING_OUT',
	SUCCESS_SIGN_OUT = '[Auth] SUCCESS_SIGN_OUT',
	ERROR_SIGN_OUT = '[Auth] ERROR_SIGN_OUT',
}

const successSignInAction = createAction(AuthActionTypes.SUCCESS_SIGN_IN);
const errorSignInAction = createAction(
	AuthActionTypes.ERROR_SIGN_IN,
	(payload: string) => payload
);
const signInAction = createAction(AuthActionTypes.SIGNING_IN);
const registerAction = createAction(AuthActionTypes.REGISTER);
const successRegisterAction = createAction(AuthActionTypes.SUCCESS_REGISTER);
const errorRegisterAction = createAction(
	AuthActionTypes.ERROR_REGISTER,
	(payload: string) => payload
);
const signOutAction = createAction(AuthActionTypes.SIGNING_OUT);
const successSignOutAction = createAction(AuthActionTypes.SUCCESS_SIGN_OUT);
const errorSignOutAction = createAction(
	AuthActionTypes.ERROR_SIGN_OUT,
	(payload: string) => payload
);

export {
	AuthActionTypes,
	signInAction,
	signOutAction,
	registerAction,
	successRegisterAction,
	successSignInAction,
	successSignOutAction,
	errorSignInAction,
	errorSignOutAction,
	errorRegisterAction,
};
