import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Search icon from react-icons
import './search.css'; // Import the separate CSS file

const SearchScreen = () => {
  return (
    <div className="search-screen">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for songs by name, singer..."
          className="search-input"
        />
        <button
          onClick={() => {}} // Placeholder function, you can add logic later
          className="search-button"
        >
          <FaSearch />
        </button>
      </div>

      {/* Song Cards */}
     
    </div>
  );
};

export default SearchScreen;
