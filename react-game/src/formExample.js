import React, { useState } from 'react';

// Create a form that accepts 
// utf-8 user input

// The main component is the form
export default function EnrollForm() {
  const [form, setForm] = useState({ guid: '', ticket: '' });
  const [errors, setErrors] = useState({ guid: '', ticket: '' });

  // Event handler for input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Destructuring to include previous states
    setForm({ ...form, [name]: value });
    // Clear error when typing
    setErrors({ ...errors, [name]: '' }); 
  };

  const validateUTF8 = (value) => {
    if (value.length < 32) {
      return 'Invalid input length';
    }

    let i = 0;

    while (i < value.length) {
      let code = value.codePointAt(i);
      let width = 0;
      let invalidChar = false;

      while (code) {

        // Get character by checking every 8 bits
        // Check the ASCII code of the character
        if (code <= 32 || code >= 126) {
          invalidChar = true;
        }
        code = code >> 8;
        width++;
      }

      i += Math.round(width / 2);

      if (width > 2) {
        invalidChar = true;
      }

      if (invalidChar) {
        return 'Invalid input characters';
      }
    }

    return ''; // No errors
  };

  const handleSubmit = async (e) => {

    // Prevent the default action response to the event
    e.preventDefault(); 
    let currentErrors = {};

    // JS supports closure:
    // the *form* variable is declared and used
    // within the same scope/block 
    Object.entries(form).forEach(([key, value]) => {
      const errMsg = validateUTF8(value);
      if (errMsg) {
        currentErrors[key] = errMsg;
      }
    });

    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
      return;
    }

    // All valid, send POST
    try {
      const response = await fetch('/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      if (!response.ok) {
        alert(result.message);
      }
    } catch (err) {
      alert('Network error: ' + err.message);
    }
  };

  return (
    <div style={styles.body}>
      <h1 style={styles.title}>Enroll</h1>
      <form onSubmit={handleSubmit} style={styles.main}>
        <label htmlFor="guid">Identification number:</label>
        <input
          type="password"
          id="guid"
          name="guid"
          value={form.guid}
          onChange={handleChange}
          placeholder="Enter your guid"
          required
        />
        {errors.guid && <span style={styles.error}>{errors.guid}</span>}

        <label htmlFor="ticket">Ticket:</label>
        <input
          type="password"
          id="ticket"
          name="ticket"
          value={form.ticket}
          onChange={handleChange}
          placeholder="Enter your ticket"
          required
        />
        {errors.ticket && <span style={styles.error}>{errors.ticket}</span>}

        <button type="submit">Submit</button>
      </form>

      <p>
        Not registered?{' '}
        <a href="#" style={{ textDecoration: 'none' }}>
          Create an account
        </a>
      </p>
    </div>
  );
}

const styles = {
  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
    lineHeight: 1.5,
    minHeight: '100vh',
    background: '#f3f3f3',
    flexDirection: 'column',
    margin: 0,
  },
  main: {
    backgroundColor: '#fff',
    borderRadius: '15px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
    padding: '10px 20px',
    width: '500px',
    textAlign: 'center',
  },
  title: {
    color: '#4CAF50',
  },
  error: {
    color: 'red',
    fontSize: '0.9em',
  },
};
