import React from 'react';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '2rem',
        marginBottom: '1rem',
        color: '#e74c3c'
      }}>
        🔧 Welcome to AutoZone
      </h1>

      <Carousel />

      <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#555' }}>
        Explore high-performance engine parts, lighting upgrades, and stylish accessories for your car. AutoZone brings the best in quality and customization.
      </p>
    </div>
  );
};

export default Home;
