// Blog.js
import React from 'react';
import './blog.css';
import  cat from './image.png'
import dog from './bloggg.jpg'

const Blog = () => {
  return (
    <div className="blog-container">
      <header className="header">
        <h1 className="title">Heartwarming Stories of Canine and Feline Companionship </h1>
       
      </header>
      <main className="main">
        <article className="post">
          <h2 className="post-title">Tara the Hero Cat</h2>
          <img src={dog} alt="Image Description" className="post-image" />
          <p className="post-content">In 2014, a video went viral showing a cat named Tara rescuing a young boy from a dog attack in Bakersfield, California. The boy, Jeremy Triantafilo, was playing in his driveway when a neighbor's dog suddenly attacked him, grabbing his leg and pulling him to the ground. Within seconds, Tara sprinted into action, launching herself at the dog, which released Jeremy. Tara then chased the dog away, saving Jeremy from further harm. The incredible bond between Tara and Jeremy was evident, showcasing the protective instinct that cats can have for their human companions.</p>
        </article>
        <article className="post">
          <h2 className="post-title">Tally and Max's Unlikely Friendship</h2>
          <img src={cat} alt="Image Description" className="post-image" />
          <p className="post-content">Tally, a rescue cat, and Max, a golden retriever, formed an unlikely friendship in their home in Portland, Oregon. When Tally was adopted, she was initially hesitant around Max, who was much larger than her. However, over time, they developed a deep bond and became inseparable. Tally would curl up on Max's back while he lounged on the floor, and they would often play and explore together. Despite their differences in size and species, Tally and Max showed that love knows no bounds and can flourish between even the most unlikely companions.</p>
        </article>
        {/* Add more articles as needed */}
      </main>
      <footer className="footer">
        <p>&copy; 2024 My Blog</p>
      </footer>
    </div>
  );
};

export default Blog;
