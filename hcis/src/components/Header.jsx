import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md p-6">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-extrabold tracking-wide">
          <Link to="/" className="hover:text-gray-200">HarleyZone</Link>
        </div>
        <ul className="flex space-x-8 text-lg">
          <li className="hover:text-gray-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link to="/bikes">Bikes</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link to="/accessories">Accessories</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
