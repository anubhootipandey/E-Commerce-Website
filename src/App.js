import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import { ThemeContext } from './components/ThemeContext'; 
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import TransactionDetail from './components/TransactionDetail';
import FAQ from './components/FAQ';
import About from './components/About';
import './App.css';  

function App() {
  const { theme } = useContext(ThemeContext); 

  return (
    <CartProvider>
        <Router>
          <div className={`app ${theme}`}> 
            <Header />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} /> 
                <Route path="/transaction" element={<TransactionDetail />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
    </CartProvider>
  );
}

export default App;
