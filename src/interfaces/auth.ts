import { State } from "../redux/reducers/auth";

export interface authState {
	authenticated: boolean,
    needConfirm: boolean,
}

export interface TAuthState {
    authState: State
};