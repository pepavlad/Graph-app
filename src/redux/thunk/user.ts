import { Dispatch } from 'redux';
import * as UserServices from '../../services/user';
import {
  setDataAction,
  setPhotoUrlAction,
  errorPhotoUrlAction,
  successPhotoUrlAction,
} from '../actions/user';

export const getData = () => {
  return (dispatch: Dispatch) => {
    UserServices.getUserData()!.on('value', snapshot => {
      const data = snapshot.val();
      dispatch(
        setDataAction({
          age: data.age,
          firstName: data.firstName,
          lastName: data.lastName,
        })
      );
    });
  };
};
export const getUserPhoto = () => {
  return (dispatch: Dispatch) => {
    UserServices.getPhotoURL()!
      .then(url => {        
        dispatch(setPhotoUrlAction(url));
      })
      .catch(error => {            
        dispatch(errorPhotoUrlAction(error.message));
      });
  };
};
export const updateUserPhoto = (image: File) => {
  return (dispatch: Dispatch) => {
    UserServices.uploadPhotoURL(image)!.then(() => {
        dispatch(successPhotoUrlAction(''));
      })
      .catch(error => {        
        dispatch(errorPhotoUrlAction(error.message));
      });
  };
};
export const updateData = (
  firstName: string,
  lastName: string,
  age: string
) => {
  return (dispatch: Dispatch) => {
    UserServices.updateUserData(firstName, lastName, age)!.then(() => {
      dispatch(
        setDataAction({
          age,
          firstName,
          lastName,
        })
      );
    });
    
  };
};
