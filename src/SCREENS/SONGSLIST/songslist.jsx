import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import './Songslist.css';

const Songslist = () => {
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);

  // Fetch songs from JSON server
  useEffect(() => {
    axios.get('http://localhost:3003/songs')
      .then((response) => setSongs(response.data))
      .catch((error) => console.error('Error fetching songs:', error));
  }, []);

  const handleEdit = (id) => {
    alert(`Edit button clicked for song with ID: ${id}`);
    navigate('/editsong')
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3003/songs/${id}`)
      .then(() => {
        setSongs(songs.filter((song) => song.id !== id)); // Update the state after deletion
        alert(`Song with ID: ${id} deleted successfully.`);
      })
      .catch((error) => console.error('Error deleting song:', error));
  };

  const handleAddSong = () => {
    navigate('/addsong'); // Navigate to Addsong component
  };

  return (
    <div className="songs-list-container">
      <div className="songs-header">
        <h1 className="songs-list-title">Songs List</h1>
        <button className="add-song-button" onClick={handleAddSong}>
          Add Song
        </button>
      </div>
      <ul className="songs-list">
        {songs.map((song) => (
          <li key={song.id} className="song-item">
            <span>{song.title} by {song.artist}</span>
            <div className="song-actions">
              <button className="edit-button" onClick={() => handleEdit(song.id)}>
                Edit
              </button>
              <button className="delete-button" onClick={() => handleDelete(song.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Songslist;
