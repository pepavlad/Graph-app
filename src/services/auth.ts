import firebase from 'firebase/app';

export const signIn = (email: string, password: string) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const signOut = () => firebase.auth().signOut();

export const register = (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  age: string
) =>
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res: any) => {
      firebase
        .database()
        .ref()
        .child('users')
        .child(res.user.uid)
        .set({ email, firstName, lastName, age });
      res.user.sendEmailVerification();
    });
