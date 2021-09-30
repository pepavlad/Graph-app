import firebase from 'firebase';
import React from 'react';
import { User } from '../interfaces/User';

export const getUserData = () => {
  const user = firebase.auth().currentUser;
  if (user) {
    return firebase.database().ref().child('users').child(user.uid);
  }
};
export const updateUserData = (
  firstName: string,
  lastName: string,
  age: string
) => {
  const user = firebase.auth().currentUser;
  if (user) {
    return firebase
      .database()
      .ref()
      .child('users')
      .child(user.uid)
      .set({ firstName, lastName, age });
  }
};
