import { createAction } from 'redux-actions';
import { User } from '../../interfaces/User';

enum UserActionTypes {
  SET_DATA = '[User] SET_DATA',
  GET_PHOTO_URL = '[User] GET_PHOTO_URL',
}

const setDataAction = createAction(
  UserActionTypes.SET_DATA,
  (payload: User) => payload
);
const setPhotoUrlAction = createAction(
  UserActionTypes.GET_PHOTO_URL,
  (payload: string) => payload
);

export { setDataAction, UserActionTypes, setPhotoUrlAction };
