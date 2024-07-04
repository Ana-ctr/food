import React from 'react';
import { Link } from 'react-router-dom';


const Header = ({ cartItemsCount, isLoggedIn }) => {
  return (
    <header className="header">
      <h1 className="logo">🍴 Yummy Eats</h1>
      <div className="header-buttons">
        {isLoggedIn ? (
          <Link to="/logout" className="btn btn-light btn-custom btn-sm">
            🔒 Logout
          </Link>
        ) : (
          <Link to="/login" className="btn btn-light btn-custom btn-sm">
            🔑 Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
