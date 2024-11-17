import React from "react";
import "./musicCard.css";

const MusicCard = ({ song }) => {
  const handleEdit = (id) => {
    alert(`Edit button clicked for song with ID: ${id}`);
  };

  return (
    <div className="music-card">
      <div className="music-image">
        <img
          src={song.imageUrl || 'https://via.placeholder.com/150'}
          alt={song.title}
        />
      </div>
      <div className="music-details">
        <div className="text-details">
          <h3 className="song-name">{song.title}</h3>
          <p className="artist-name">{song.artist}</p>
        </div>
        <button className="like-button">❤️</button>
      </div>
      <div className="music-player">
        <audio controls>
          <source src={song.url} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
      {/* <button onClick={() => handleEdit(song.id)} className="edit-button">
        Edit
      </button> */}
    </div>
  );
};

export default MusicCard;
