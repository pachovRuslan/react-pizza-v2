import React from 'react';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
import FullPizza from './components/FullPizza';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
  
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} /> 
            <Route path="cart" element={<Cart />} />
            <Route path="pizza/:id" element={<FullPizza />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
  );
}

export default App;
