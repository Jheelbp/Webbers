import React from 'react';
import CardItem from './Carditem';
import './Cards.css';
import image1 from './imagesSP/image 1.jpeg';
import image2 from './imagesSP/image 2.jpeg';
import image3 from './imagesSP/image 3.jpeg';
import image4 from './imagesSP/image 4.jpeg'
import image5 from './imagesSP/image 5.jpeg';
import image6 from './imagesSP/image 6.jpeg';


const Cards = () => {
  return (
    <div className='cards'>
    <h1>Popular Searches</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem  src={image1}
                    text="Indulge in Elegance: Discover Our Exquisite Jewelry Collection!"
                    label='Jewellery'
                    path='/jewellery'/>
                    <CardItem  src={image2}
                    text="Imagine the Perfect Bridal Ensemble: Your Dream Wedding Attire Awaits!"
                    label='Bridal Wear'
                    path='/outfit'/>
                    <CardItem  src={image3}
                    text="Crafting Culinary Bliss for Your Unforgettable Day!"
                    label='Catering'
                    path='/catering'/>
                    
                </ul>
                <ul className="cards__items">
                    <CardItem  src={image4}
                    text="Weddings organised by JODI JUNCTION"
                    label='Wedding'
                    path='/wedding'/>
                    <CardItem  src={image5}
                    text="TOP 5 wedding destinations in India"
                    label='Blog'
                    path='/blog'/>
                    <CardItem  src={image6}
                    text="Envision the Perfect Venue: Your Dream Wedding Decor Awaits!"
                    label='Decor'
                    path='/shop'/>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;
