import React, { useContext } from "react";
import { ThemeContext } from "../context/MyContext"; // Update path accordingly
import ProductDetails from "../components/DummyApi";

const About = () => {
  const { theme } = useContext(ThemeContext); // Access theme and toggleTheme

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">About Page</h1>
        <p className="mb-4">Current theme is {theme}</p>
        <ProductDetails />
      </div>
    </div>
  );
};

export default About;
