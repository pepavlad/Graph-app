import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SignedInLinks from '../SignedInLinks/SignedInLinks';
import SignedOutLinks from '../SignedOutLinks/SignedOutLinks';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className='nav-wrapper cyan lighten-3'>
      <div className='container'>
        <Link to='/' className='brand-logo left'>
          Graph-app
        </Link>
        {location.pathname === '/home' || location.pathname === '/profile' ? (
          <SignedInLinks />
        ) : (
          <SignedOutLinks />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
