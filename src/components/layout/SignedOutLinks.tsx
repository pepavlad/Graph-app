import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks: React.FC = () => {
  return (
    <ul className="links right">
      <li>
        <NavLink to="/">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Login</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
