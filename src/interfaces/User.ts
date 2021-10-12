import { UserState } from "../redux/reducers/user";

export interface User {
	age: string;
	firstName: string;
	lastName: string
}
export interface TUserState {
	userState: UserState
}