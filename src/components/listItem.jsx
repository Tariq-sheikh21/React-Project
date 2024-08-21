import React, { useContext } from 'react';
import { ThemeContext } from '../context/MyContext'; 

const ListComponent = () => {
  const { theme } = useContext(ThemeContext);
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"]; // Example items

  return (
    <div className={`p-4 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
