import React from 'react';
import { Link } from 'react-router-dom';
// import SearchBar from './SearchBar'; 
import "../Styles/navbar.css"


const Navbar = () => {
  // const handleSearch = (query) => {
  //  console.log('Search for:', query);
  // };

  return (
    <nav>
      <div className="navbar-container">
        <div className="logo">Movie App</div>
        {/* <div className="search-bar">
          <SearchBar onSearch={handleSearch} />
        </div> */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
