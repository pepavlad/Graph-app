import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/thunk/auth';
import { createNewProjectAction } from '../../redux/actions/graphs';

const SignedInLinks: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const createNewProject = () => {
    dispatch(createNewProjectAction());
  };
  const logOut = () => {
    history.push('/login');
    dispatch(signOut(history));
  };
  return (
    <ul id='nav-mobile' className='right hide-on-med-and-down links'>
      <li>
        <a onClick={createNewProject}>New Project</a>
      </li>
      <li>
        <NavLink to='/login' onClick={logOut}>
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink to='/profile'>
          <i className='material-icons'>account_circle</i>
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
