import './App.css';
import './adaptive.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage, ScrollingText } from './components/main'
import { Home } from './components/home'
import { Cart, PsysicalCart, DigitalCart } from './components/cart';
import { Profile, MyProfile, Orders, Wishlist, Authorize } from './components/profile';
import { Genre } from './components/genre';
import { Book } from './components/book';
import { NotFound } from './components/errorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Home></Home>} />
          <Route path="/Fiction/Thrillers" element={<Genre></Genre>} />
          <Route path="/ContemporaryAuthors/OrdinaryMonsters" element={<Book></Book>} />
        </Route>

        <Route path="/Cart" element={<Cart></Cart>}>
          <Route index element={<PsysicalCart></PsysicalCart>} />
          <Route path="/Cart/Physical" element={<PsysicalCart></PsysicalCart>} />
          <Route path="/Cart/Digital" element={<DigitalCart></DigitalCart>} />
        </Route>
        <Route path="/Profile" element={<Profile></Profile>}>
          <Route index element={<MyProfile></MyProfile>} />
          <Route path="/Profile/Orders" element={<Orders></Orders>} />
          <Route path="/Profile/Wishlist" element={<Wishlist></Wishlist>} />
          <Route path="/Profile/Authorize" element={<Authorize></Authorize>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;