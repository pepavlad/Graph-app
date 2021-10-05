import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { successSignInAction } from '../../redux/actions/auth';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { signIn } from '../../redux/thunk/auth';
import selectSignInError from '../../redux/selectors/auth';

const SignInForm: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const signInError = useSelector(selectSignInError);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { email, password } = event.target as HTMLInputElement & {
      email: { value: string };
      password: { value: string };
    };
    dispatch(signIn(email.value, password.value, history));
  };

  return (
    <form onSubmit={handleSubmit} className='white'>
      <h5 className='grey-text text-draken-3'>Sign In</h5>
      <Input type='email' name='email' placeholder='Email' label='Email' />
      <Input
        type='password'
        name='password'
        placeholder='Password'
        label='Password'
      />
      {signInError && (
        <span
          className='helper-text red-text'
          data-error='wrong'
          data-success='right'
        >
          {signInError}
        </span>
      )}

      <Button text='Sign In' className='btn cyan lighten-3 z-depth-0' />
      <div className='register'>
        Don't have an account? <Link to='/register'>Register</Link> now.
      </div>
    </form>
  );
};

export default SignInForm;
