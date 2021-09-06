import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { signOut } from '../../redux/thunk/auth';

const SignedInLinks: React.FC = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const logOut = () => {
		history.push('/');
		dispatch(signOut(history));
	};
	return (
		<ul className='links right'>
			<li>
				<NavLink to='/'>New Project</NavLink>
			</li>
			<li>
				<NavLink to='/login' onClick={logOut}>
					Log Out
				</NavLink>
			</li>
			<li>
				<NavLink to='/'>
					<i className='material-icons'>account_circle</i>
				</NavLink>
			</li>
		</ul>
	);
};

export default SignedInLinks;
