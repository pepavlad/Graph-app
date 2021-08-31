import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useDispatch } from "react-redux";
import { register } from "../../redux/thunk/auth";
import { Link, useHistory } from "react-router-dom";

const SignUpForm: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { email, password, firstName, lastName, birthDate } =
      event.target as HTMLInputElement & {
        email: { value: string };
        password: { value: string };
        firstName: { value: string };
        lastName: { value: string };
        birthDate: { value: string };
      };
    dispatch(
      register(
        email.value,
        password.value,
        firstName.value,
        lastName.value,
        birthDate.value,
        history
      )
    );
  };

  return (
    <form onSubmit={handleSubmit} className="white">
      <h5 className="grey-text text-draken-3">Sign Up</h5>
      <Input
        type="text"
        name="firstName"
        placeholder="First name"
        label="First name"
      />
      <Input
        type="text"
        name="lastName"
        placeholder="Last name"
        label="Last name"
      />
      <Input
        type="text"
        name="birthDate"
        placeholder="Birth date"
        label="Birth date"
      />
      <Input type="email" name="email" placeholder="Email" label="Email" />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        label="Password"
      />
      <Button text={"Sign Up"} className="btn cyan lighten-3 z-depth-0" />
      <div className="login">
        Already have an account? <Link to="/">Login</Link> now.
      </div>
    </form>
  );
};

export default SignUpForm;
