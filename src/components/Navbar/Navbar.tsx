import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "../SignedInLinks/SignedInLinks";
import SignedOutLinks from "../SignedOutLinks/SignedOutLinks";
import { connect } from "react-redux";
const Navbar: React.FC = () => {
  return (
    <nav className="nav-wrapper cyan lighten-3">
      <div className="container">
        <Link to="/" className="brand-logo left">
          Graph-app
        </Link>
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default connect()(Navbar);
