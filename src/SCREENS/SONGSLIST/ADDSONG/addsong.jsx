import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import './addsong.css';

const Addsong = () => {
  const navigate = useNavigate();
  const [songName, setSongName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [songUrl, setSongUrl] = useState('');
  const [songImage, setSongImage] = useState(''); // State for image URL

  const handleSave = (e) => {
    e.preventDefault();

    // Create the new song object
    const newSong = {
      title: songName,
      artist: artistName,
      url: songUrl,
      imageUrl: songImage, // Add the image URL
    };

    // Post data to JSON server
    axios.post('http://localhost:3003/songs', newSong)
      .then(() => {
        alert('Song details saved successfully!');
        navigate('/songslist'); // Navigate to the Songslist component after saving
      })
      .catch((error) => {
        console.error('Error saving song:', error);
        alert('Failed to save song details.');
      });
  };

  const handleCancel = () => {
    alert('Cancelled');
    navigate('/songslist'); // Navigate to the songs list on cancel
  };

  return (
    <div className="edit-song-container">
      <h2>Add Song</h2>
      <form className="edit-song-form" onSubmit={handleSave}>
        <div className="form-group">
          <label htmlFor="songName">Song Name:</label>
          <input
            type="text"
            id="songName"
            placeholder="Enter song name"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="artistName">Artist Name:</label>
          <input
            type="text"
            id="artistName"
            placeholder="Enter artist name"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="songUrl">Song URL:</label>
          <input
            type="url"
            id="songUrl"
            placeholder="Enter song URL"
            value={songUrl}
            onChange={(e) => setSongUrl(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="songImage">Song Image URL:</label>
          <input
            type="url"
            id="songImage"
            placeholder="Enter song image URL"
            value={songImage}
            onChange={(e) => setSongImage(e.target.value)} // Update songImage state
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="save-button">Save</button>
          <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Addsong;
