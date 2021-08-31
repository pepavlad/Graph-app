import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks: React.FC = () => {
  return (
    <ul className="links right">
      <li>
        <NavLink to="/">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
