import React, { useState, useEffect } from "react";
import MusicCard from "../../COMPONENTS/CARDS/musicCard";
import axios from "axios";
import "./MusicCardsTemplate.css";
import MusicBanner from "../../COMPONENTS/CARDS/MusicBanner";

const MusicCardsTemplate = () => {
  const [defaultSongs, setDefaultSongs] = useState([]); // For default songs fetched from API
  const [songs, setSongs] = useState([]); // For user-added songs
  const [error, setError] = useState(""); // For storing error messages
  const [loading, setLoading] = useState(true); // Loading state

  // Updated banners data with titles and descriptions
  const banners = [
    {
      id: 1,
      title: "",
      description: "",
      imageUrl: "https://i.ytimg.com/vi/tt2EXP9iuNU/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "",
      description: "",
      imageUrl: "https://i.ytimg.com/vi/1vOdWyba8nU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB_-8_cw2YRdwLLfUyi8ksunSTxyA",
    },
    {
      id: 3,
      title: "",
      description: "",
      imageUrl: "https://www.ntvenglish.com/wp-content/uploads/2023/12/Superstar-Mahesh-Babus-Guntur-Kaaram-films-third-single-is-out-now.jpg",
    },
  ];

  // Fetch default songs from API
  useEffect(() => {
    setLoading(true); // Set loading state to true when fetching data
    axios
      .get("http://localhost:3000/DefaultSongslist")
      .then((response) => {
        console.log("Default Songs Data:", response.data); // Debug log
        setDefaultSongs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching default songs:", error);
        setError("Failed to load default songs.");
      })
      .finally(() => setLoading(false)); // Set loading to false after the request is completed
  }, [
    
  ]);

  // Fetch user-added songs from API
  useEffect(() => {
    setLoading(true); // Set loading state to true when fetching data
    axios
      .get("http://localhost:3000/songs")
      .then((response) => {
        console.log("Added Songs Data:", response.data); // Debug log
        setSongs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching added songs:", error);
        setError("Failed to load added songs.");
      })
      .finally(() => setLoading(false)); // Set loading to false after the request is completed
  }, []);

  return (
    <div className="music-cards-template">
      {/* Banner Section */}
      <div className="banner-section">
        <div className="banner-scroll-container">
          {banners.map((banner) => (
            <MusicBanner key={banner.id} banner={banner} />
          ))}
        </div>
      </div>

      {/* Error Message */}
      {error && <div className="error-message">{error}</div>}

      {/* Loading State */}
      {loading && <div className="loading-message">Loading...</div>}

      {/* Default Songs Section */}
      <div className="default-songs-section">
        {/* <h2>Default Songs</h2> */}
        <div className="song-cards-row">
          {defaultSongs.length === 0 ? (
            <p>No default songs available</p>
          ) : (
            defaultSongs.map((song) => (
              <MusicCard key={song.id} song={song} listType="DefaultSongslist" />
            ))
          )}
        </div>
      </div>

      {/* Added Songs Section */}
      <div className="added-songs-section">
        <h2>Added Songs</h2>
        <div className="song-cards-row">
          {songs.length === 0 ? (
            <p>No added songs available</p>
          ) : (
            songs.map((song) => (
              <MusicCard key={song.id} song={song} listType="songs" />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicCardsTemplate;
