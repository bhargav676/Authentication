import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { store } from './App';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [token, setToken] = useContext(store);
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(''); // State to handle error messages
  const navigate = useNavigate();

  const submithandler = (e) => {
    e.preventDefault();
    axios
      .post('https://server-jade-seven.vercel.app/login', { email: mail, password: pass })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem('token', token);
        setToken(token);
        setError(''); 
      })
      .catch((err) => {
        console.error(err.response.data);
        setError('Invalid email or password. Please try again.'); 
      });
  };

  useEffect(() => {
    if (token) {
      navigate('/profile');
    }
  }, [token, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center p-6">
      <form
        className="bg-white shadow-xl rounded-lg p-10 max-w-md w-full space-y-6"
        onSubmit={submithandler}
        autoComplete="off"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Login to Your Account</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>} 
        <div className="relative">
          <input
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className={`w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out peer ${
              mail ? 'pt-6' : ''
            }`}
          />
          <label
            className={`absolute left-4 top-3 text-sm font-medium text-gray-500 transition-all duration-300 ease-in-out pointer-events-none
              ${mail ? '-top-2 text-xs text-teal-500' : 'peer-focus:-top-2 peer-focus:text-xs peer-focus:text-teal-500'}`}
          >
            Email
          </label>
        </div>
        <div className="relative">
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className={`w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out peer ${
              pass ? 'pt-6' : ''
            }`}
          />
          <label
            className={`absolute left-4 top-3 text-sm font-medium text-gray-500 transition-all duration-300 ease-in-out pointer-events-none
              ${pass ? '-top-2 text-xs text-teal-500' : 'peer-focus:-top-2 peer-focus:text-xs peer-focus:text-teal-500'}`}
          >
            Password
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-teal-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-teal-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
