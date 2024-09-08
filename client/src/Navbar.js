import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">
          <Link to="/">MyApp</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link 
              to='/register' 
              className="text-white hover:bg-gray-700 px-3 py-2 rounded transition duration-300 ease-in-out"
            >
              Register
            </Link>
          </li>
          <li>
            <Link 
              to='/login' 
              className="text-white hover:bg-gray-700 px-3 py-2 rounded transition duration-300 ease-in-out"
            >
              Login
            </Link>
          </li>
          <li>
            <Link 
              to='/profile' 
              className="text-white hover:bg-gray-700 px-3 py-2 rounded transition duration-300 ease-in-out"
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
