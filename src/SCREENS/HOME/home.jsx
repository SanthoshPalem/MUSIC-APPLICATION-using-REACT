import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from '../PROFILE/profile';
import Search from '../SEARCH/search';
import Likedsongs from '../LIKEDSONGS/likedsongs';
import Songslist from '../SONGSLIST/songslist';
import Sidebar from '../../COMPONENTS/SIDEBAR/sidebar';
import './home.css'; // Add a CSS file for styling
// import MusicCard from '../../COMPONENTS/musicCard';
import MusicCardsTemplate from './musicCardsTemplate';
import Addsong from '../SONGSLIST/ADDSONG/addsong';
import Editsong from '../SONGSLIST/EDITSONG/editsong';
import Playlist from '../PLAYLISTS/playlist';
import Addplaylist from '../PLAYLISTS/ADDPLAYLISTS/addplaylist';

const Home = () => {
  return (
    <div className="home-container">
      <Router>
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<MusicCardsTemplate/>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/likedsongs" element={<Likedsongs />} />
            <Route path="/playlist" element={<Playlist/>} />
            <Route path="/songslist" element={<Songslist />} />
            <Route path="/addsong" element={<Addsong/>} />
            <Route path="/editsong" element={<Editsong/>} />
            <Route path="/addplaylist" element={<Addplaylist/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Home;
