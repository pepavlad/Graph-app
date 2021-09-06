import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import firebase from 'firebase/app';

interface AppLoadingProps {
	setIsLogin: any;
}
const AppLoading: React.FC<AppLoadingProps> = ({ setIsLogin }) => {
	const history = useHistory();

	useEffect(() => {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				if (user.emailVerified) {
					setIsLogin(true);
					history.push('/home');
				} else {
					setIsLogin(false);
					history.push('/confirm');
				}
			} else {
				setIsLogin(false);
				history.push('/home');
			}
		});
	}, [history]);
	return <div />;
};

export default AppLoading;
