import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';
import { FaHome, FaSearch, FaHeart, FaMusic, FaList, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Profile Section */}
      <div className="profile-section">
        <NavLink to='/profile' activeClassName='active'>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUn7FSyBSOYfd4LakAorD8BwBTWxrgobtXCw&s" // Replace with an actual image URL
            alt="Profile"
            className="profile-picture"
          />
          <h3 className="username">TONY STARK</h3> {/* Dynamic username */}
        </NavLink>
      </div>

      {/* Navigation Section */}
      <div className="menu-section">
        <NavLink to="/" className="menu-item" activeClassName="active">
          <FaHome className="menu-icon" />
          <span>Home</span>
        </NavLink>
        <NavLink to="/search" className="menu-item" activeClassName="active">
          <FaSearch className="menu-icon" />
          <span>Search</span>
        </NavLink>
        <NavLink to="/likedsongs" className="menu-item" activeClassName="active">
          <FaHeart className="menu-icon" />
          <span>Liked Songs</span>
        </NavLink>
        <NavLink to="/playlist" className="menu-item" activeClassName="active">
          <FaMusic className="menu-icon" />
          <span>Playlists</span>
        </NavLink>
        <NavLink to="/songslist" className="menu-item" activeClassName="active">
          <FaList className="menu-icon" />
          <span>Songs List</span>
        </NavLink>
      </div>

      {/* Signout Section */}
      <div className="signout-section">
        <NavLink to="/signout" className="menu-item">
          <FaSignOutAlt className="menu-icon" />
          <span>Sign Out</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
