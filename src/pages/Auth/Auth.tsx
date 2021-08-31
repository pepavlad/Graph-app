import React from "react";
import { register } from "../../redux/thunk/auth";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";

export const SignUp: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { email, password, firstName, lastName, birthDate } =
      event.target as HTMLInputElement & {
        email: { value: string };
        firstName: { value: string };
        lastName: { value: string };
        birthDate: { value: string };
        password: { value: string };
      };
    dispatch(
      register(
        email.value,
        password.value,
        firstName.value,
        lastName.value,
        birthDate.value
      )
    );
  };

  return (
    <div className="container">
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
      </form>
    </div>
  );
};

export default SignUp;
