import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn }) => {
  return (
    <header className="header">
      <h1 className="logo">🍴 Yummy Eats</h1>
      <div className="header-buttons">
        {isLoggedIn && (
          <Link to="/logout" className="btn btn-light btn-custom btn-sm">
            🔒 Logout
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
