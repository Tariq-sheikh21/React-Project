import React, { useContext } from 'react';
import useFetch from '../components/useFetch';
import { ThemeContext } from '../context/MyContext'; // Update the path accordingly

const FetchComponent = () => {
  const { data, loading, error } = useFetch('https://dummyjson.com/products?limit=30');
  const { theme } = useContext(ThemeContext);

  if (loading) {
    return <p className={`${theme === "dark" ? "text-white" : "text-black"} text-center`}>Loading...</p>;
  }

  if (error) {
    return <p className={`${theme === "dark" ? "text-red-400" : "text-red-600"} text-center`}>Error: {error.message}</p>;
  }

  // Filter the products to include only those with the category "groceries"
  const groceries = data.products.filter(product => product.category === 'groceries');

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} py-6`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-4">Grocery Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {groceries.map((product) => (
            <div key={product.id} className={`border rounded-lg p-4 shadow-lg ${theme === "dark" ? "bg-gray-800 text-white border-gray-700" : "bg-white text-black border-gray-300"}`}>
              <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>{product.title}</h2>
              <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{product.description}</p>
              <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>Category: {product.category}</p>
              <p className={`font-semibold ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`}>Price: ${product.price}</p>
              <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mt-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FetchComponent;
