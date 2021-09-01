import firebase from 'firebase';

export const signIn = (email: string, password: string) => {
		return firebase.auth().signInWithEmailAndPassword(email, password);
}
export const signOut = () => {
	return firebase.auth().signOut();
}
export const register = (email: string, password: string, firstName: string, lastName: string, birthDate: string) => {
	return firebase.auth().createUserWithEmailAndPassword(email, password)
	.then((res: any) => {
		firebase.database().ref().child('users').child(res.user.uid).set({email, firstName, lastName, birthDate});
		res.user.sendEmailVerification();
	});
}