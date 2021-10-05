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
export const downloadGraph = (graphName: string) => {
  const user = firebase.auth().currentUser;
  if (user) {
    return firebase
      .database()
      .ref()
      .child('graphs')
      .child(user.uid)
      .child(graphName);
  }
};

export const getAllGraphs = () => {
  const user = firebase.auth().currentUser;
  if (user) {
    return firebase.database().ref().child('graphs').child(user.uid);
  }
};

export const deleteGraph = (graphName: string) => {
  const user = firebase.auth().currentUser;
  if (user) {
    return firebase
      .database()
      .ref()
      .child('graphs')
      .child(user.uid)
      .child(graphName)
      .remove();
  }
};
