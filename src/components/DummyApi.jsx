import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../context/MyContext'; // Update the path accordingly

const ProductList = () => {
  const { theme } = useContext(ThemeContext);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=30');
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError('Error Fetching Data');
        console.error('Error Fetching Data', err);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className={`container mx-auto p-4 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className={`border rounded-lg p-4 shadow-lg ${theme === "dark" ? "bg-gray-800 text-white border-gray-700" : "bg-white text-black border-gray-300"}`}>
              <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>{product.title}</h2>
              <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{product.description}</p>
              <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>Category: {product.category}</p>
              <p className={`font-semibold ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`}>Price: ${product.price}</p>
              <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mt-2" />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default ProductList;
