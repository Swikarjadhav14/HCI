import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-8 mt-12">
      <div className="container mx-auto text-center">
        <ul className="flex justify-center space-x-6 mb-4">
          <li>
            <a href="https://www.facebook.com" className="hover:text-gray-100">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com" className="hover:text-gray-100">Instagram</a>
          </li>
          <li>
            <a href="https://www.twitter.com" className="hover:text-gray-100">Twitter</a>
          </li>
        </ul>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} HarleyZone. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
