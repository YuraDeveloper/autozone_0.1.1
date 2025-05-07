import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', address: '' });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#2c3e50' }}>Thank you, {form.name}!</h2>
        <p style={{ color: '#34495e' }}>Confirmation sent to {form.email}</p>
      </div>
    );
  }

  return (
    <section style={{
      padding: '2rem',
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#f8f8f8',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginBottom: '1rem', color: '#2c3e50' }}>Checkout</h2>

      <div style={{
        marginBottom: '1.5rem',
        backgroundColor: '#fff',
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: 'inset 0 0 3px rgba(0,0,0,0.05)'
      }}>
        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.5rem 0',
              borderBottom: '1px dashed #ccc'
            }}
          >
            <span style={{ color: '#2c3e50' }}>{item.name} x {item.quantity}</span>
            <span style={{ color: '#27ae60' }}>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <hr style={{ margin: '1rem 0' }} />
        <strong style={{ display: 'flex', justifyContent: 'space-between', color: '#e74c3c' }}>
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </strong>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type='text'
          name='name'
          placeholder='Your Name'
          required
          onChange={handleChange}
          style={{
            padding: '0.75rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          required
          onChange={handleChange}
          style={{
            padding: '0.75rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />
        <textarea
          name='address'
          placeholder='Shipping Address'
          required
          onChange={handleChange}
          style={{
            padding: '0.75rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            resize: 'vertical',
            minHeight: '80px'
          }}
        />
        <button
          type='submit'
          style={{
            backgroundColor: '#2ecc71',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '0.75rem',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Place Order
        </button>
      </form>
    </section>
  );
};

export default Checkout;