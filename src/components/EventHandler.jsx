import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/MyContext'; // Update the path accordingly

const EventHandler = () => {
  const { theme } = useContext(ThemeContext); // Access the current theme from ThemeContext
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch data function
  const fetchData = async () => {
    setLoading(true); // Set loading state to true
    try {
      const response = await fetch('https://dummyjson.com/products?limit=30');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Filter products to include only those in the "beauty" category
      const beautyProducts = data.products.filter(product => product.category === 'beauty');
      setProducts(beautyProducts);
    } catch (err) {
      setError('Error Fetching Data');
      console.error('Error Fetching Data', err);
    } finally {
      setLoading(false); // Set loading state to false after fetching is done
    }
  };

  return (
    <div className={`container mx-auto p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <button
        onClick={fetchData}
        className={`mb-4 px-4 py-2 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 ${theme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500' : 'bg-blue-500 text-white hover:bg-blue-700 focus:ring-blue-500'}`}
      >
        Load Beauty Products
      </button>
      {loading && <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Loading...</p>}
      {error && <div className={`${theme === 'dark' ? 'text-red-300' : 'text-red-500'}`}>{error}</div>}
      {products.length > 0 ? (
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
          {products.map((product) => (
            <div key={product.id} className={`border rounded-lg p-4 shadow-lg ${theme === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}>
              <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{product.title}</h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{product.description}</p>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Category: {product.category}</p>
              <p className={`font-semibold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Price: ${product.price}</p>
              <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mt-2" />
            </div>
          ))}
        </div>
      ) : (
        !loading && <p className="text-center">No beauty products available.</p>
      )}
    </div>
  );
};

export default EventHandler;
