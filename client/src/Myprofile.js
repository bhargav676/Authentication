import React, { useState, useContext, useEffect } from 'react';
import { store } from './App';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Myprofile = () => {
  const [token, setToken] = useContext(store);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      axios.get('http://127.0.0.1:4000/myprofile', {
        headers: {
          'x-token': token
        }
      }).then(res => setData(res.data))
        .catch(err => console.error(err));
    }
  }, [token]);

  // Redirect if no token
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Logout function
  const logout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    setToken(null); // Clear token from context
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center  p-6">
      {data && <h1 className="text-2xl font-bold mb-4">Welcome: {data.name}</h1>}
      <button 
        onClick={logout}
        className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300 ease-in-out"
      >
        Logout
      </button>
    </div>
  );
};

export default Myprofile;
