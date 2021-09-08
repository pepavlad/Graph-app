import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { register } from '../../redux/thunk/auth';

const SignUpForm: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { email, password, firstName, lastName, age } =
      event.target as HTMLInputElement & {
        email: { value: string };
        password: { value: string };
        firstName: { value: string };
        lastName: { value: string };
        age: { value: string };
      };
    dispatch(
      register(
        email.value,
        password.value,
        firstName.value,
        lastName.value,
        age.value,
        history
      )
    );
  };

  return (
    <form onSubmit={handleSubmit} className='white'>
      <h5 className='grey-text text-draken-3'>Sign Up</h5>
      <Input
        required
        type='text'
        name='firstName'
        placeholder='First name'
        label='First name'
      />
      <Input
        type='text'
        name='lastName'
        placeholder='Last name'
        label='Last name'
        required
      />
      <Input
        type='number'
        name='age'
        placeholder='Your age'
        label='Your age'
        min='18'
        required
      />
      <Input
        required
        type='email'
        name='email'
        placeholder='Email'
        label='Email'
      />
      <Input
        type='password'
        name='password'
        placeholder='Password'
        minLength={8}
        label='Password'
      />
      <Button text='Sign Up' className='btn cyan lighten-3 z-depth-0' />
      <div className='login'>
        Already have an account? <Link to='/login'>Login</Link> now.
      </div>
    </form>
  );
};

export default SignUpForm;
