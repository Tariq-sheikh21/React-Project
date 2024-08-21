import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import ContactWrapper from './pages/Contact'; 
import { ThemeProvider } from './context/MyContext';
import FetchComponent from './pages/CustomHook';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactWrapper />} />
          <Route path="/custom" element={<FetchComponent />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
