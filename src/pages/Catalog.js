import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const mockProducts = [
  { id: 1, name: 'Air Filter', price: 29.99, category: 'engine' },
  { id: 2, name: 'LED Headlights', price: 89.99, category: 'tuning' },
  { id: 3, name: 'Spark Plugs', price: 45.0, category: 'engine' },
  { id: 4, name: 'Shift Knob', price: 24.99, category: 'accessories' }
];

const Catalog = () => {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = mockProducts
    .filter(p => filter === 'all' || p.category === filter)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <section style={{ padding: '2rem' }}>
      <h2>Catalog</h2>
      <div style={{ margin: '1rem 0' }}>
        <input
          type='text'
          placeholder='Search...'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select onChange={e => setFilter(e.target.value)} style={{ marginLeft: '1rem' }}>
          <option value='all'>All</option>
          <option value='engine'>Engine</option>
          <option value='tuning'>Tuning</option>
          <option value='accessories'>Accessories</option>
        </select>
      </div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {filtered.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '1rem', width: 200 }}>
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalog;