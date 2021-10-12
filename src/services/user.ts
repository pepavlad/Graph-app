import firebase from 'firebase';

export const getUserData = () => {
  const user = firebase.auth().currentUser;
  if (user) {
    return firebase.database().ref().child('users').child(user.uid);
  }
};
export const getPhotoURL = () => {
  const user = firebase.auth().currentUser;
  if (user) {
    return firebase.storage().ref('avatars').child(user.uid).getDownloadURL();
  }
};
export const uploadPhotoURL = (image: File) => {
  const user = firebase.auth().currentUser;
  if (user) {
    return firebase.storage().ref('avatars').child(user.uid).put(image);
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
