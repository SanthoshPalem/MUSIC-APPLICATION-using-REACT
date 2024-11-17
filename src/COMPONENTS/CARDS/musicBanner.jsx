import React from "react";
import "./MusicBanner.css";

const MusicBanner = ({ banner }) => {
  return (
    <div className="music-banner-item">
      <img
        src={banner.imageUrl}
        alt={banner.title}
        className="banner-image"
      />
      <div className="banner-overlay">
        <h2 className="banner-title">{banner.title}</h2>
        <p className="banner-description">{banner.description}</p>
      </div>
    </div>
  );
};

export default MusicBanner;
