import React from "react";
import Input from "../UI/Input";

const handleSubmit = (event: React.FormEvent) => {
  const { email, password } = event.target as HTMLInputElement & {
    email: { value: string };
    password: { value: string };
  };
};
const SignIn: React.FC = () => {
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-draken-3">Sign In</h5>
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

export default SignIn;
