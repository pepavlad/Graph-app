import firebase from 'firebase';
import { IVertic } from '../interfaces/IVertic';

export const saveGraph = (
  vertics: IVertic[],
  links: number[][],
  graphName: string
) => {
  const user = firebase.auth().currentUser;
  if (user) {
    return firebase
      .database()
      .ref()
      .child('graphs')
      .child(user.uid)
      .child(graphName)
      .set({ vertics, links });
  }
};

export const deleteGraph = () => {};
