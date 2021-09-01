import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/thunk/auth";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";
const SignInForm: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { email, password } = event.target as HTMLInputElement & {
      email: { value: string };
      password: { value: string };
    };
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (user.emailVerified) {
          dispatch(signIn(email.value, password.value, history));
        } else {
          history.push("/confirm");
        }
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="white">
      <h5 className="grey-text text-draken-3">Sign In</h5>
      <Input type="email" name="email" placeholder="Email" label="Email" />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        label="Password"
      />
      <Button text={"Sign In"} className="btn cyan lighten-3 z-depth-0" />
      <div className="register">
        Don't have an account? <Link to="/register">Register</Link> now.
      </div>
    </form>
  );
};

export default SignInForm;
