import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <section className="section">
      <div className="container">
        <h2 className="has-text-centered is-size-2 mb-3">Sign Up</h2>
        <form className="form" onSubmit={() => {}}>
          <Input
            name="firstName"
            mask=""
            value={firstName}
            onChange={(e) => setFirstName(e.currentTarget.value)}
            placeholder="First name"
            label="First name"
          />
          <Input
            mask=""
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.currentTarget.value)}
            placeholder="Last name"
            label="Last name"
          />
          <Input
            name="birthDate"
            mask="99.99.9999"
            value={birthDate}
            onChange={(e) => setBirthDate(e.currentTarget.value)}
            placeholder="Birth date"
            label="Birth date"
          />
          <Input
            mask=""
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Email address"
            label="Email address"
          />
          <Input
            mask=""
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Password"
            label="Password"
          />
          <Button
            text={loading ? "Loading..." : "Sign Up"}
            className="is-primary is-light is-fullwidth mt-5"
            disabled={loading}
          />
        </form>
      </div>
    </section>
  );
};

export default SignUp;
