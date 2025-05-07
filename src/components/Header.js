import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{ background: '#27548A', color: '#fff', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '2rem' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <svg width='40' height='40' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='50' cy='50' r='45' stroke='#DDA853' strokeWidth='6' />
        <path d='M30 50 L70 50 M50 30 L50 70' stroke='#DDA853' strokeWidth='4' strokeLinecap='round'/>
      </svg>
      <h1 style={{ fontSize: '1.5rem', margin: 0, color: '#F3F3E0' }}>AutoZone</h1>
    </div>
    <nav style={{ display: 'flex', gap: '1.5rem' }}>
      <Link to='/'>Home</Link>
      <Link to='/catalog'>Catalog</Link>
      <Link to='/checkout'>Checkout</Link>
    </nav>
  </header>
);

export default Header;