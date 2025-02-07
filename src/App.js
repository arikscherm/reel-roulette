import React from 'react';
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Routes
import { TuneProvider } from './components/TuneContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CurrentSession from './components/CurrentSession'
import Favorites from './components/Favorites'
import TuneLibrary from './components/TuneLibrary'
import './App.css';

function App() {

  <Helmet>
    <title>Reel-Roulette</title>
  </Helmet> 

  return (
    <Router>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <header>
        <h1>Reel-Roulette</h1>
        <Navbar />
      </header>
      <TuneProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tune-library" element={<TuneLibrary />} />
          <Route path="/current-session" element={<CurrentSession />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </TuneProvider>
    </Router>
  );
}

export default App;