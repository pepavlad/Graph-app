import { useEffect, useState } from "react";
import firebase from "firebase";

export const useAuthListener = (): boolean => {
  const [loggedIn, setLoggedIn] = useState(false);


    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      }
    });

  return loggedIn;
};
