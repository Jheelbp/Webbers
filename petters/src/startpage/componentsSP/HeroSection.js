import React from 'react';
import Button from './Button';
import './HeroSection.css';
import '../componentsSP/AppSP.css';
import landscapeImage from './imagesSP/dog.jpg'; // Import the image file

const HeroSection = () => {
  return (
    <div className="hero-container">
      <img src={landscapeImage} alt="Landscape" className="landscape-image" />
      <h1>FUR-EVER LOVE </h1>
      <p>Where Every Paw Prints a Heartbeat.</p>
      <div className="hero-btns">
      </div>
    </div>
  );
}

export default HeroSection;

