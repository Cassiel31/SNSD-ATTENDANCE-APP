import React, { useState } from 'react';

export default function SignupPage({
  setCurrentPage,
  signupData,
  setSignupData,
}) {
  const [fullName, setFullName] = useState(signupData.fullName || '');

  const [username, setUsername] = useState(signupData.username || '');

  const [email, setEmail] = useState(signupData.email || '');

  const [password, setPassword] = useState(signupData.password || '');

  function handleContinue() {
    if (!fullName) {
      alert('Please enter your full name.');
      return;
    }

    if (!username) {
      alert('Please enter your username.');
      return;
    }

    if (username.length < 4) {
      alert('Username must be at least 4 characters long.');
      return;
    }

    if (!email) {
      alert('Please enter your email.');
      return;
    }

    if (!email.includes('@')) {
      alert('Please enter a valid email.');
      return;
    }

    if (!password) {
      alert('Please enter your password.');
      return;
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    if (!/[A-Z]/.test(password)) {
      alert('Password must include at least one uppercase letter.');
      return;
    }

    if (!/[0-9]/.test(password)) {
      alert('Password must include at least one number.');
      return;
    }

    setSignupData({
      fullName,
      username,
      email,
      password,
    });

    setCurrentPage('details');
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f6f2ee',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Inter, sans-serif',
        padding: '40px 0',
      }}
    >
      <div
        style={{
          width: '320px',
          backgroundColor: 'white',
          padding: '32px',
          borderRadius: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: 'Playfair Display, serif',
              margin: 0,
              fontSize: '42px',
              color: '#1f1f23',
            }}
          >
            Welcome
          </h1>

          <p
            style={{
              marginTop: '8px',
              color: '#777',
              fontSize: '15px',
              lineHeight: '1.5',
            }}
          >
            Create your SNSD account.
          </p>
        </div>

        <div>
          <label
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
            }}
          >
            Full Name
            <span style={{ color: 'red' }}> *</span>
          </label>

          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '16px',
              borderRadius: '16px',
              border: '1px solid #ddd',
              fontSize: '16px',
              outline: 'none',
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
            }}
          >
            Username
            <span style={{ color: 'red' }}> *</span>
          </label>

          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '16px',
              borderRadius: '16px',
              border: '1px solid #ddd',
              fontSize: '16px',
              outline: 'none',
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
            }}
          >
            Email
            <span style={{ color: 'red' }}> *</span>
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '16px',
              borderRadius: '16px',
              border: '1px solid #ddd',
              fontSize: '16px',
              outline: 'none',
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
            }}
          >
            Password
            <span style={{ color: 'red' }}> *</span>
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '16px',
              borderRadius: '16px',
              border: '1px solid #ddd',
              fontSize: '16px',
              outline: 'none',
            }}
          />

          <p
            style={{
              marginTop: '10px',
              color: '#777',
              fontSize: '13px',
              lineHeight: '1.5',
            }}
          >
            Password must contain:
            <br />
            • At least 8 characters
            <br />
            • One uppercase letter
            <br />• One number
          </p>
        </div>

        <button
          onClick={handleContinue}
          style={{
            marginTop: '8px',
            padding: '16px',
            borderRadius: '999px',
            border: 'none',
            backgroundColor: '#1f1f23',
            color: 'white',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
          }}
        >
          CONTINUE
        </button>

        <button
          onClick={() => setCurrentPage('home')}
          style={{
            background: 'none',
            border: 'none',
            color: '#777',
            cursor: 'pointer',
          }}
        >
          ← Back
        </button>
      </div>
    </div>
  );
}
