import React from 'react';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import MainLayout from './layouts/MainLayout';

const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */'./Pages/NotFound'));
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */'./components/FullPizza'));
const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */'./Pages/Cart'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <React.Suspense fallback={<div>Идёт загрузка корзины</div>}>
              <Cart />
            </React.Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <React.Suspense fallback={<div>Идёт загрузка корзины</div>}>
              <FullPizza />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback={<div>Идёт загрузка корзины</div>}>
              <NotFound />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
