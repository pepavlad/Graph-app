import React, { useEffect } from "react";
import { useHistory } from "react-router";
import firebase from "firebase";

const AppLoading: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (user.emailVerified) {
          history.push("/home");
        } else {
          history.push("/confirm");
        }
      } else {
        history.push("/login");
      }
    });
  }, [history]);
  return <div />;
};

export default AppLoading;
