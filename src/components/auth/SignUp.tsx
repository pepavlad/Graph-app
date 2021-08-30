import React from "react";
import Input from "../UI/Input";

const handleSubmit = (event: React.FormEvent) => {
  const { email, password } = event.target as HTMLInputElement & {
    email: { value: string };
    password: { value: string };
  };
};
const SignUp: React.FC = () => {
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
        <button className="btn cyan lighten-3 z-depth-0">Login</button>
      </form>
    </div>
  );
};

export default SignUp;
