import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
const Navbar: React.FC = () => {
  return (
    <nav className="nav-wrapper cyan lighten-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Graph-app
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
