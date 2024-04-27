import React from 'react';
import Button from './Button';
import './HeroSection.css';
import '../componentsSP/AppSP.css';
import landscapeImage from './imagesSP/landscape.png'; // Import the image file

const HeroSection = () => {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${landscapeImage})` }}>
      <div className="hero-btns">
        <Button buttonStyle='btn--outline' buttonSize='btn--large'>
         ADOPT A PET
        </Button>
        <Button buttonStyle='btn--primary' buttonSize='btn--large'>
          CONTACT US <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
