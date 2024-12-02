import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './editsong.css';

const Editsong = ({ songDetails }) => {
  const navigate = useNavigate();

  // Pre-fill the fields with the existing song details
  const [songName, setSongName] = useState(songDetails?.title || '');
  const [artistName, setArtistName] = useState(songDetails?.artist || '');
  const [songUrl, setSongUrl] = useState(songDetails?.url || '');
  const [songImage, setSongImage] = useState(songDetails?.imageUrl || '');
  const [genre, setGenre] = useState(songDetails?.genre || ''); // State for genre
  const [previewImage, setPreviewImage] = useState(songDetails?.imageUrl || null);

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setSongImage(url); // Update the songImage state with the URL
    setPreviewImage(url); // Update the preview to the new URL
  };

  const handleSave = (e) => {
    e.preventDefault();

    // Updated song details with genre
    const updatedSong = {
      title: songName,
      artist: artistName,
      url: songUrl,
      imageUrl: songImage, // Use the URL for the song image
      genre: genre, // Add the genre to the updated song object
    };

    // Save to the backend
    axios
      .put(`http://localhost:3000/songs/${songDetails.id}`, updatedSong)
      .then(() => {
        alert('Song details updated successfully!');
        navigate('/songslist'); // Navigate to song list after saving
      })
      .catch((error) => {
        console.error('Error updating song:', error);
        alert('Failed to update the song details.');
      });
  };

  const handleCancel = () => {
    alert('Cancelled');
    navigate('/songslist'); // Navigate to song list on cancel
  };

  const renderInputField = (label, value, setValue, type, placeholder) => (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder} // Display previous data as a placeholder
        required
      />
    </div>
  );

  return (
    <div className="edit-song-container">
      <h2>Edit Song Details</h2>
      <form className="edit-song-form" onSubmit={handleSave}>
        {renderInputField('Song Name:', songName, setSongName, 'text', songDetails?.title || 'Enter song name')}
        {renderInputField('Artist Name:', artistName, setArtistName, 'text', songDetails?.artist || 'Enter artist name')}
        {renderInputField('Song URL:', songUrl, setSongUrl, 'url', songDetails?.url || 'Enter song URL')}

        <div className="form-group">
          <label>Song Image URL:</label>
          <input
            type="url"
            value={songImage}
            onChange={handleImageUrlChange}
            placeholder={songDetails?.imageUrl || 'Enter image URL'}
          />
          {previewImage && <img src={previewImage} alt="Preview" className="image-preview" />}
        </div>

        {/* Genre field */}
        <div className="form-group">
          <label>Genre:</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)} // Update genre state
            placeholder={songDetails?.genre || 'Enter genre'}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="save-button">
            Save
          </button>
          <button type="button" className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editsong;
