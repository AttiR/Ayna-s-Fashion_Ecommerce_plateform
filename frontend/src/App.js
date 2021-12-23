import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import About from './screens/About';
import ProductScreen from './screens/ProductScreen';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="product/:id" element={<ProductScreen />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
