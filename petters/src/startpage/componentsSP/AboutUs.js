import React from 'react';
import './AboutUs.css';
import petImage from './imagesSP/image 1.jpeg'; // Import your image file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <img src={petImage} alt="Pet" className="pet-image" />
      <p>
        In today's fast-paced environment, pet owners face a myriad of challenges that can impact the well-being and happiness of their furry friends. From managing health care and nutrition to ensuring appropriate socialization and exercise, the responsibilities can be overwhelming.
      </p>
      <p>
        Our goal is to develop an innovative application designed to simplify and enhance the pet ownership experience. By providing valuable resources, personalized recommendations, and convenient tools, we aim to empower pet owners to provide the best possible care for their beloved companions.
      </p>
      <div className="contact-info">
        <h3>Contact Us</h3>
        <p>
          Email: info@petcareapp.com
        </p>
        <p>
          Phone: 123-456-7890
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
