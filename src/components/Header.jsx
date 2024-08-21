import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/MyContext'; // Update the path accordingly
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-600'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-white text-xl font-bold">MyApp</h1>
        </div>
        <div className="flex items-center md:hidden">
          <button onClick={handleToggle} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul className={`flex-col md:flex md:flex-row md:space-x-4 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <li>
            <Link to="/" className="text-white hover:text-gray-300 block md:inline-block py-2 md:py-0">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300 block md:inline-block py-2 md:py-0">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300 block md:inline-block py-2 md:py-0">Contact</Link>
          </li>
          <li>
            <Link to="/custom" className="text-white hover:text-gray-300 block md:inline-block py-2 md:py-0">Custom Hook</Link>
          </li>
        </ul>
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-full text-white font-semibold transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ml-4 ${
            theme === 'dark' 
              ? 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300' 
              : 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-300'
          }`}
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Header;
