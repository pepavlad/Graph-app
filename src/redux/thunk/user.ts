import { Dispatch } from 'redux';
import React from 'react';
import * as UserServices from '../../services/user';
import { User } from '../../interfaces/User';
import { setDataAction } from '../actions/user';

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
export const updateData = (
  firstName: string,
  lastName: string,
  age: string
) => {
  return (dispatch: Dispatch) => {
    UserServices.updateUserData(firstName, lastName, age);
    dispatch(
      setDataAction({
        age,
        firstName,
        lastName,
      })
    );
  };
};
