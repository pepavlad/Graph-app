import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "../SignedInLinks/SignedInLinks";
import SignedOutLinks from "../SignedOutLinks/SignedOutLinks";
import { useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <nav className="nav-wrapper cyan lighten-3">
      <div className="container">
        <Link to="/home" className="brand-logo left">
          Graph-app
        </Link>
        {location.pathname === "/home" ? <SignedInLinks /> : <SignedOutLinks />}
      </div>
    </nav>
  );
};

export default Navbar;
