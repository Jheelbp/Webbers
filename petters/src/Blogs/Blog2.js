// Blog.js
import React from 'react';
import './blog2.css';
import dog1 from './dogg4.jpeg';
import dog2 from './dogg3.jpeg';
import dog3 from './dogg2.jpeg';
import dog4 from './dogg1.jpeg';

const Blog2 = () => {
  return (
    <div className="blog-container">
      <header className="header">
        <h1 className="title">Uncovering the most sociable dog breeds for every Lifestyle</h1>
       
      </header>
      <main className="main">
        <article className="post">
          <h2 className="post-title">Golden Retriever</h2>
         <img src={dog1}   className='video1'></img>
          <p className="post-content">Golden Retriever who is Known for their friendly and outgoing nature, Golden Retrievers are excellent companions for active families or individuals who enjoy outdoor activities. They thrive on social interaction and are known to be gentle and affectionate, making them great with children and other pets. Their intelligence and eagerness to please make them easy to train for various activities, including obedience and therapy work.</p>
        </article>
        <article className="post">
          <h2 className="post-title">Labrador Retriever</h2>
          <img src={dog2}   className='video1'></img>
          <p className="post-content">Labrador Retrievers are one of the most popular breeds worldwide, thanks to their friendly demeanor and adaptability. They are highly sociable and enjoy being around people, making them ideal pets for families, singles, or seniors. Labs are known for their playful nature and boundless energy, making them excellent companions for outdoor adventures or simply lounging around the house. They are also versatile working dogs, excelling in roles such as service, search and rescue, and therapy.</p>
        </article>
        <article className="post">
          <h2 className="post-title">Cavalier King Charles Spaniel</h2>
          <img src={dog3}   className='video1'></img>
          <p className="post-content">With their affectionate and gentle temperament, Cavalier King Charles Spaniels are perfect companions for those seeking a smaller-sized, sociable breed. They are known for their love of cuddling and forming close bonds with their human family members. Cavaliers are adaptable to various living situations, including apartments or suburban homes, as long as they receive plenty of attention and affection. They thrive on human companionship and are generally good with children and other pets.</p>
        </article>
        <article className="post">
          <h2 className="post-title">Poodle</h2>
          <img src={dog4}   className='video1'></img>
          <p className="post-content"> Poodles come in three sizes—standard, miniature, and toy—and all share the same sociable and intelligent traits. They are highly trainable and enjoy being part of family activities, whether it's playing games, going for walks, or participating in dog sports. Poodles are also known for their hypoallergenic coat, making them suitable for individuals with allergies. Their friendly disposition and versatility make them great companions for families, singles, or seniors alike.</p>
        </article>
     
      </main>
      <footer className="footer">
        <p>&copy; 2024 My Blog</p>
      </footer>
    </div>
  );
};

export default Blog2;
