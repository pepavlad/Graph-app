import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';
import { authState } from './interfaces/auth';

interface AppLoadingProps {
  authState: authState;
}
const AppLoading: React.FC<AppLoadingProps> = () => {
  const history = useHistory();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        if (user.emailVerified) {
          history.push('/home');
        } else {
          history.push('/confirm');
        }
      } else {
        history.push('/login');
      }
    });
  }, [history]);
  return <div />;
};

export default AppLoading;
