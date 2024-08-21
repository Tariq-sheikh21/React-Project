import React, { useContext } from 'react';
import ListComponent from '../components/listItem';
import { ThemeContext } from '../context/MyContext'; 
import { NoThemeContext, useNoTheme } from '../context/NoThemeContext'; 

const Contact = () => {
  const { theme } = useNoTheme();
  // const { theme } = useContext(ThemeContext);;

  return (
    // <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} py-6`}>
    <div className={`min-h-screen  py-6`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <ListComponent />
      </div>
    </div>
  );
};

export default Contact;
