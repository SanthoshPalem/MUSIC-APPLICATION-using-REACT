import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MusicCard from '../../COMPONENTS/CARDS/musicCard';  // Import the MusicCard component

const Likedsongs = () => {
  const [songs, setSongs] = useState([]);  // State for liked songs
  const [defaultSongs, setDefaultSongs] = useState([]);  // State for default songs
  const [error, setError] = useState('');  // State for error handling
  const [loading, setLoading] = useState(true);  // Loading state to display a loading message

  useEffect(() => {
    setLoading(true);  // Start loading

    // Fetch liked songs
    axios.get('http://localhost:3000/songs')
      .then((response) => {
        setSongs(response.data);  // Update state with fetched liked songs
      })
      .catch((error) => {
        console.error('Error fetching liked songs:', error);
        setError('Failed to load liked songs.');  // Set error message
      });

    // Fetch default songs
    axios.get('http://localhost:3000/DefaultSongslist')
      .then((response) => {
        setDefaultSongs(response.data);  // Update state with fetched default songs
      })
      .catch((error) => {
        console.error('Error fetching default songs:', error);
        setError('Failed to load default songs.');  // Set error message
      })
      .finally(() => setLoading(false));  // Stop loading once request is complete
  }, []);

  // Filter liked songs from both arrays
  const likedSongsFromSongsArray = songs.filter(song => song.liked === true);
  const likedSongsFromDefaultArray = defaultSongs.filter(song => song.liked === true);

  return (
    <div>
      <h1>Liked Songs</h1>
      {loading && <p>Loading songs...</p>} {/* Loading message */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Error message */}

      {/* Display liked songs from the songs array */}
      <h2>Your Liked Songs</h2>
      
        <div className="song-cards-row">
          {likedSongsFromSongsArray.map((song) => (
            <MusicCard key={song.id} song={song} listType="songs" /> // Display liked songs from user-added songs
          ))}
        </div>
      

      {/* Display liked songs from the default songs array */}
      {/* <h2>Default Liked Songs</h2> */}
  
        <div className="song-cards-row">
          {likedSongsFromDefaultArray.map((song) => (
            <MusicCard key={song.id} song={song} listType="DefaultSongslist" /> // Display liked songs from default songs
          ))}
        </div>
      
    </div>
  );
};

export default Likedsongs;
