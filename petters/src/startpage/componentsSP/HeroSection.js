import React from 'react';
import Button from './Button';
import './HeroSection.css';
import '../componentsSP/AppSP.css';
import landscapeImage from './imagesSP/landscape.jpeg'; // Import the image file

const HeroSection = () => {
  return (
    <div className="hero-container">
      <img src={landscapeImage} alt="Landscape" className="landscape-image" />
      <h1>PET </h1>
      <p>A Magical Wedding</p>
      <div className="hero-btns">
      </div>
    </div>
  );
}

export default HeroSection;

