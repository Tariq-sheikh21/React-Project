import React, { useContext } from 'react';
import { ThemeContext } from '../context/MyContext'; // Update the path accordingly
import Counter from '../components/Counter';
import Event from '../components/Event';
import EventHandler from '../components/EventHandler';

const Home = () => {
  const { theme } = useContext(ThemeContext); // Access the current theme from ThemeContext

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome to the Home Page</h2>
        <p className="text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
        </p>
        <Counter />
        <h1 className="text-3xl font-bold mb-4">React Event Handling Example</h1>
        <Event />
        <EventHandler />
      </div>
    </div>
  );
};

export default Home;
