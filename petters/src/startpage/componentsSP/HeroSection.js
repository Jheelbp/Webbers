/*import React from 'react';
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
    </div>
  );
}

export default HeroSection;*/
import React from 'react';
import Button from './Button';
import './HeroSection.css';
import landscapeImage from './imagesSP/dog.jpg'; // Import the image file
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${landscapeImage})` }}>
      <h1>FUR-EVER LOVE</h1>
      <p>Where Every Paw Prints a Heartbeat.</p>
      <div className="hero-btns">
      <Link to="/adoptdog" className="btn--link">
        <Button buttonStyle='btn--outline' buttonSize='btn--large'>
          ADOPT A PET
        </Button>
        </Link>
        <Link to="/aboutUs" className="btn--link">
        <Button buttonStyle='btn--primary' buttonSize='btn--large'>
          CONTACT US <i className='far fa-play-circle' />
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;

