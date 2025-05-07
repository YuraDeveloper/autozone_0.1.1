import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [open, setOpen] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{
      position: 'fixed',
      right: open ? 0 : '-280px',
      top: 0,
      width: '280px',
      height: '100%',
      backgroundColor: '#fff',
      boxShadow: open ? '-2px 0 8px rgba(0,0,0,0.2)' : 'none',
      padding: '1rem',
      zIndex: 1000,
      transition: 'right 0.3s ease'
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'absolute',
          left: '-30px',
          top: '1rem',
          width: '30px',
          height: '30px',
          background: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {open ? '→' : '←'}
      </button>

      <h2>Cart</h2>
      {cart.length === 0 ? <p>No items in cart.</p> : cart.map(item => (
        <div key={item.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '0.5rem' }}>
          <strong>{item.name}</strong>
          <p>${item.price.toFixed(2)} x 
            <input
              type='number'
              value={item.quantity}
              min={1}
              onChange={e => updateQuantity(item.id, Number(e.target.value))}
              style={{ width: '50px', marginLeft: '0.5rem' }}
            />
          </p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <hr />
      <p><strong>Total: ${total.toFixed(2)}</strong></p>
    </div>
  );
};

export default CartDrawer;