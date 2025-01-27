import React, { useState } from 'react';
import axios from 'axios';
import './update.css';

const UpdatePassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/update-password', {
        email,
        newPassword,
      });
      setMessage(response.data.message);
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update password');
      setMessage('');
    }
  };

  return (
    <div className="update-password-container">
      <h1>Update Password</h1>
      <form onSubmit={handleUpdatePassword}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default UpdatePassword;
