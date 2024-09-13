import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import Hero from './components/Hero.js';
import HomeInfo from './components/HomeInfo.js';
import Footer from './components/Footer.js';
import ChatBot from './components/ChatBot.js'

function App() {
  return (
    <>
      <NavBar/>
      
      <Hero/>
      <HomeInfo/>
      <Footer/>
    </>
  );
}

export default App;
