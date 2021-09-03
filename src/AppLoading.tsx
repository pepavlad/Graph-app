import React, { useEffect } from "react";
import { useHistory } from "react-router";
import firebase from "firebase";
interface AppLoadingProps {
  setIsLogin: any;
}
const AppLoading: React.FC<AppLoadingProps> = ({ setIsLogin }) => {
  const history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (user.emailVerified) {
          setIsLogin(true);
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
