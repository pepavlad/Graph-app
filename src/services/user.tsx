import firebase from 'firebase';

const getUserData = () => {
  const user = firebase.auth().currentUser;
  let data;
  if (user) {
    firebase
      .database()
      .ref()
      .child('users')
      .child(user.uid)
      .on('value', snapshot => {
        data = snapshot.val();
      });
    return data;
  }
};

export default getUserData;
