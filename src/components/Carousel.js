import React, { useState, useEffect } from 'react';

const images = [
  'https://picsum.photos/id/1011/800/300',
  'https://picsum.photos/id/1005/800/300',
  'https://picsum.photos/id/103/800/300',
  'https://picsum.photos/id/1018/800/300'
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index) => setCurrent(index);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.2)', marginBottom: '2rem' }}>
      <img src={images[current]} alt='Slide' style={{ width: '100%', height: 'auto', display: 'block' }} />
      <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.5rem' }}>
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: current === i ? '#000' : '#ccc',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
