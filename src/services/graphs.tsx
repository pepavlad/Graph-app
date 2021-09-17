import firebase from 'firebase';

export const saveGraph = (pngURL: string, graphName: string) => {
  const user = firebase.auth().currentUser;
  if (user) {
    return firebase
      .storage()
      .ref('graps')
      .child(user.uid)
      .child(graphName)
      .putString(pngURL, 'data_url');
  }
};
export const downloadGraph = (graphName: string) => {
  const user = firebase.auth().currentUser;
  if (user) {
    return firebase
      .storage()
      .ref('graps')
      .child(user.uid)
      .child(graphName)
      .getDownloadURL();
  }
};
export const getAllGraphs = () => {
  const user = firebase.auth().currentUser;
  if (user) {
    return firebase.storage().ref('graps').child(user.uid).listAll();
  }
};
export const deleteGraph = () => {};
