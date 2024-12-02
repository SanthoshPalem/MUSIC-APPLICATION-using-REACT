import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from '../PROFILE/profile';
import Search from '../SEARCH/search';
import Likedsongs from '../LIKEDSONGS/likedsongs';
import Songslist from '../SONGSLIST/songslist';
import Sidebar from '../../COMPONENTS/SIDEBAR/sidebar';
import './home.css'; 
import MusicCardsTemplate from './musicCardsTemplate';
import Addsong from '../SONGSLIST/ADDSONG/addsong';
import Editsong from '../SONGSLIST/EDITSONG/editsong';

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
            <Route path="/songslist" element={<Songslist />} />
            <Route path="/addsong" element={<Addsong/>} />
            <Route path="/editsong" element={<Editsong/>} />
  
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Home;
