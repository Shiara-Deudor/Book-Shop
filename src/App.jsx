import React from 'react';
import '@/styles/index.scss';
import Header from './layouts/header/Header';
import Home from './pages/home/Home';
import Footer from './layouts/footer/Footer';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import Likes from './pages/likes/Likes';
import Profile from './pages/profile/Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
