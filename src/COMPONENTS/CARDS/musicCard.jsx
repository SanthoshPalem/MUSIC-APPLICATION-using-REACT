import React, { useState } from "react";
import axios from "axios";
import "./musicCard.css";

const MusicCard = ({ song, onLike, listType }) => {
  const [isLiked, setIsLiked] = useState(song.liked || false); // Initialize with song's current like status

  // Handle like/unlike click
  const handleLikeClick = async () => {
    const newLikedStatus = !isLiked; // Toggle the like status
    setIsLiked(newLikedStatus); // Optimistically update local state immediately

    try {
      // Dynamically determine the endpoint based on listType
      const endpoint =
        listType === "songs"
          ? `http://localhost:3000/songs/${song.id}`
          : `http://localhost:3000/DefaultSongslist/${song.id}`;

      // Send the updated liked status to the backend
      const response = await axios.patch(endpoint, {
        liked: newLikedStatus, // Pass the updated 'liked' status
      });

      // Log the response for debugging
      console.log('API Response:', response.data);

      // Optionally, notify the parent component if an onLike function is provided
      if (onLike) {
        onLike(song.id, newLikedStatus, listType);
      }
    } catch (error) {
      console.error("Error updating liked status:", error);
      // If there’s an error, revert to the previous liked status
      setIsLiked(!newLikedStatus);
      // Optionally show an alert to the user or log the error in more detail
    }
  };

  return (
    <div className="music-card" style={{ cursor: "pointer" }}>
      <div className="music-image">
        <img
          src={song.imageUrl || "https://via.placeholder.com/150"}
          alt={song.title}
        />
      </div>
      <div className="music-details">
        <div className="text-details">
          <h3 className="song-name">{song.title}</h3>
          <p className="artist-name">{song.artist}</p>
        </div>
        <button
          className={`like-button ${isLiked ? "liked" : ""}`}
          onClick={handleLikeClick} // Trigger like/unlike click event
        >
          {isLiked ? "❤️ Liked" : "🤍 Like"}
        </button>
      </div>

      {/* Audio Controls */}
      <div className="audio-controls">
        <audio controls>
          <source
            src={song.url || "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"}
            type="audio/mp3"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default MusicCard;
