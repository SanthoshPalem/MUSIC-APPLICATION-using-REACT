import React, { useState, useEffect } from "react";
import MusicCard from "../../COMPONENTS/CARDS/musicCard";
import axios from "axios";
import "./MusicCardsTemplate.css";
import MusicBanner from "../../COMPONENTS/CARDS/MusicBanner";

const MusicCardsTemplate = () => {
  const [songs, setSongs] = useState([]);

  // Banners array with images
  const banners = [
    {
      title: "",
      description: "",
      imageUrl: "https://i.ytimg.com/vi/tt2EXP9iuNU/maxresdefault.jpg",
    },
    {
      title: "",
      description: "",
      imageUrl: "https://i.ytimg.com/vi/1vOdWyba8nU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB_-8_cw2YRdwLLfUyi8ksunSTxyA",
    },
    {
      title: "",
      description: "",
      imageUrl: "https://www.ntvenglish.com/wp-content/uploads/2023/12/Superstar-Mahesh-Babus-Guntur-Kaaram-films-third-single-is-out-now.jpg",
    },
  ];

  // Fetch songs from the JSON server
  useEffect(() => {
    axios
      .get("http://localhost:3003/songs")
      .then((response) => setSongs(response.data))
      .catch((error) => {
        console.error("Error fetching songs:", error);
        alert("Failed to load songs.");
      });
  }, []);

  return (
    <div className="music-cards-template">
      {/* Horizontal Banner Section */}
      <div className="banner-section">
        <div className="banner-scroll-container">
          {banners.map((banner, index) => (
            <MusicBanner key={index} banner={banner} />
          ))}
        </div>
      </div>

      {/* Bottom Division - Song Cards */}
      <div className="songs-section">
        {songs.length > 0 ? (
          songs.map((song) => <MusicCard key={song.id} song={song} />)
        ) : (
          <p>No songs available.</p>
        )}
      </div>
    </div>
  );
};

export default MusicCardsTemplate;
