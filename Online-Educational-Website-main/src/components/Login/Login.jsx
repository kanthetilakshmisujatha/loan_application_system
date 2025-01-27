// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../styles/login.css';


// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const validateInputs = () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return 'Invalid email format.';
//     }
//     if (password.length < 6) {
//       return 'Password must be at least 6 characters.';
//     }
//     return '';
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const validationError = validateInputs();
//     if(validationError){
//       setError(validationError);
//       return;
//     }

//     setLoading(true);
//     setError('');
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
//       localStorage.setItem('token', res.data.token);  // Store token in localStorage
//       alert('Login successful');
//       navigate('/dashboard'); // Navigate to the dashboard after login
//     } catch (err) {
//       //alert('Login failed: ' + err.response.data.error);
//       setError(err.response?.data?.error || 'Login failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Login</h1>
//       <form onSubmit={handleLogin}>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         {error && <p className='error'>{error}</p>}
//         <button type="submit" disabled={loading}>
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </form>
//       <div className='links'>
//         <p>
//           <a href="/signup"> Sign Up</a> | <a href="/forgot-password">Forgot Password?</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Validate input fields
  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Invalid email format.';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters.';
    }
    return '';
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Input validation
    const validationError = validateInputs();
    if(validationError){
      setError(validationError);
      return;
    }

    setLoading(true);
    setError('');

    // Check if the email and password are the admin credentials
    if ((email === 'EZSUJI@GMAIL.COM'|| email==='EZGAYATHRI@GMAIL.COM') && password === 'EZFINAZ') {
      // Store token in localStorage and navigate to admin dashboard
      localStorage.setItem('token', 'admin-token');  // You can replace with an actual JWT token if needed
      alert('Admin Login successful');
      navigate('/acknowledgmentPage'); // Redirect to Admin Dashboard
      setLoading(false);
      return;
    }

    // Make an API call for other users
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token); // Store token in localStorage
      alert('Login successful');
      navigate('/dashboard'); // Navigate to the user dashboard
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className='error'>{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <div className='links'>
        <p>
          <a href="/signup"> Sign Up</a> | <a href="/forgot-password">Forgot Password?</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
