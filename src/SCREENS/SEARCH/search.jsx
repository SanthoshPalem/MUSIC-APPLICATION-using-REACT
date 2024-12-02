import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import './search.css';
import MusicCard from '../../COMPONENTS/CARDS/musicCard';
import { songs, DefaultSongslist } from 'C:/Users/palem/OneDrive/Desktop/REACT/Music Application/MUSIC/db.json';

const SearchScreen = () => {
  const [query, setQuery] = useState(''); // Search query state
  const [combinedSongs, setCombinedSongs] = useState([]); // To store the combined songs list with persisted liked status

  // Combine both song lists and update liked status
  useEffect(() => {
    const storedLikedStatus = JSON.parse(localStorage.getItem('likedSongs')) || {};

    // Update the songs with their liked status from localStorage
    const updatedSongs = [...songs, ...DefaultSongslist].map((song) => {
      return { ...song, liked: storedLikedStatus[song.id] || song.liked };
    });

    setCombinedSongs(updatedSongs);
  }, []);

  const handleLikeClick = (songId) => {
    setCombinedSongs((prevSongs) => {
      const updatedSongs = prevSongs.map((song) => {
        if (song.id === songId) {
          // Toggle the liked status
          song.liked = !song.liked;
          
          // Update the localStorage with the new liked status
          const updatedLikedStatus = JSON.parse(localStorage.getItem('likedSongs')) || {};
          updatedLikedStatus[songId] = song.liked;
          localStorage.setItem('likedSongs', JSON.stringify(updatedLikedStatus));
        }
        return song;
      });
      return updatedSongs;
    });
  };

  // Filter songs dynamically based on the search query
  const filteredSongs = combinedSongs.filter((song) => {
    const titleMatch = song.title.toLowerCase().includes(query.toLowerCase());
    const artistMatch = song.artist.toLowerCase().includes(query.toLowerCase());
    return titleMatch || artistMatch;
  });

  return (
    <div className="search-screen">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for songs by name, singer..."
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update query state
        />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>

      {/* Search Results */}
      <div className="search-results">
        {filteredSongs.length > 0 ? (
          <div className="results-container">
            {filteredSongs.map((song) => (
              <MusicCard
                key={song.id}
                song={song}
                onLike={handleLikeClick} // Pass the like handler to MusicCard
              />
            ))}
          </div>
        ) : query ? (
          <p>No results found.</p>
        ) : (
          <p>Type something to search for songs!</p>
        )}
      </div>
    </div>
  );
};

export default SearchScreen;
