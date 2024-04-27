import React from 'react';
import CardItem from './Carditem';
import './Cards.css';
import image1 from './imagesSP/image 1.jpeg';
import image2 from './imagesSP/image 2.jpeg';
import image3 from './imagesSP/image 3.jpeg';
import image4 from './imagesSP/image 4.jpg'
import image5 from './imagesSP/image 5.png';
import image6 from './imagesSP/image 6.jpg';


const Cards = () => {
  return (
    <div className='cards'>
    <h1>Popular Searches</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem  src={image1}
                    text="Heartwarming Stories of Canine and Feline Companionship"
                    label='Blog'
                    path='/blog'/>
                    <CardItem  src={image2}
                    text="Your One-Stop Shop for Healthy Meals and Playtime Adventures!"
                    label='Pet Shop'
                    path='/shop'/>
                    <CardItem  src={image3}
                    text="Uncovering the Most Sociable Dog Breeds for Every Lifestyle"
                    label='Blog'
                    path='/blog2'/>
                    
                </ul>
                <ul className="cards__items">
                    <CardItem  src={image4}
                    text="Nearby Locations "
                    label='location'
                    path='/map'/>
                    <CardItem  src={image5}
                    text="Meet and interact with our pet-supportive community "
                    label='Community'
                    path='/no'/>
                    <CardItem  src={image6}
                    text="Give a furry friend a forever home and gain a loyal companion!"
                    label='Adoption'
                    path='/adoptdog'/>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;
