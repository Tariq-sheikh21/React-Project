import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/MyContext'; // Update the path accordingly

const Counter = () => {
  const { theme } = useContext(ThemeContext);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className={`text-center py-10 mx-auto mt-10 rounded-lg shadow-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
      <h2 className="text-2xl font-bold mb-4">Counter</h2>
      <h3 className="text-xl text-green-500 mb-6">Count: {count}</h3>
      <div className="space-x-4">
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 font-bold text-white rounded hover:bg-blue-700"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 font-bold text-white rounded hover:bg-red-700"
        >
          -
        </button>
      </div>
      <h3 className="mt-6 font-bold">You Click {count1}</h3>
      <button
        className="px-4 py-2 mt-2 bg-blue-500 font-bold text-white rounded hover:bg-blue-700"
        onClick={() => setCount1(count1 + 1)}
      >
        Click me
      </button>
    </div>
  );
};

export default Counter;
