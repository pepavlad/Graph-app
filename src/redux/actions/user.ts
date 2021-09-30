import { createAction } from 'redux-actions';
import { User } from '../../interfaces/User';

enum UserActionTypes {
  SET_DATA = '[User] SET_DATA',
}

const setDataAction = createAction(
  UserActionTypes.SET_DATA,
  (payload: User) => payload
);

export { setDataAction, UserActionTypes };
