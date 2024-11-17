import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './playlist.css';

const Playlist = () => {
  const navigate = useNavigate(); // Initialize navigate hook
  // const [songs, setSongs] = useState([
  //   // Sample songs (can be empty initially)
  //   { id: 1, title: 'Song 1', artist: 'Artist 1', genre: 'Pop' },
  //   { id: 2, title: 'Song 2', artist: 'Artist 2', genre: 'Rock' },
  // ]);

  const handleAddSong = () => {
    navigate('/addplaylist'); // Navigate to the Addplaylist component
  };

  return (
    <div className="playlist-container">
      <div className="header">
        <h1>Playlist</h1>
        <button onClick={handleAddSong} className="add-button">
          Add Song
        </button>
      </div>
      <div className="songs-section">
       
          <div >
            {/* <h3>{song.title}</h3>
            <p>{song.artist}</p>
            <p><strong>Genre:</strong> {song.genre}</p> */}
            <h1>Add Playlists</h1>
          </div>
      </div>
    </div>
  );
};

export default Playlist;
