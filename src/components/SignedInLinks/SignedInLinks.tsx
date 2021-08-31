import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks: React.FC = () => {
  return (
    <ul className="links right">
      <li>
        <NavLink to="/">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/">
          <i className="icon material-icons">account_circle</i>
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
