import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import './addplaylist.css';

const Addplaylist = () => {
  const navigate = useNavigate();
  
  // State variables for song details
  const [songName, setSongName] = useState('');
  const [songArtist, setSongArtist] = useState('');
  const [songUrl, setSongUrl] = useState('');
  const [songImage, setSongImage] = useState('');
  const [songGenre, setSongGenre] = useState('');

  const handleSave = (e) => {
    e.preventDefault();


    // Create the new song object
    const newSong = {
      name: songName,
      artist: songArtist,
      url: songUrl,
      imageUrl: songImage,
      genre: songGenre
    };

    // Post data to JSON server
    axios.post('http://localhost:3003/songs', newSong)
      .then(() => {
        alert('Song details saved successfully!');
        navigate('/playlist'); // Navigate to the Songs list after saving
      })
      .catch((error) => {
        console.error('Error saving song:', error);
        alert('Failed to save song details.');
      });
  };

  const handleCancel = () => {
    alert('Cancelled');
    navigate('/playlist'); // Navigate to the songs list on cancel
  };

//   const handleNavigate = () =>{

//   }
  return (
    <div className="add-playlist-container">
      <h2>Add Song</h2>
      <form className="add-playlist-form" onSubmit={handleSave}>
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
          <label htmlFor="songArtist">Artist Name:</label>
          <input
            type="text"
            id="songArtist"
            placeholder="Enter song artist"
            value={songArtist}
            onChange={(e) => setSongArtist(e.target.value)}
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
            onChange={(e) => setSongImage(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="songGenre">Song Genre:</label>
          <select
            id="songGenre"
            value={songGenre}
            onChange={(e) => setSongGenre(e.target.value)}
            required
          >
            <option value="" disabled>Select song genre</option>
            <option value="Pop">Pop</option>
            <option value="Rock">Rock</option>
            <option value="Jazz">Jazz</option>
            <option value="Hip-Hop">Hip-Hop</option>
            <option value="Classical">Classical</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" className="save-button" >Save</button>
          <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Addplaylist;
