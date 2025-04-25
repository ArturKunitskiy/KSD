import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './components/main'
import { Home } from './components/home'
import { ScrollingText } from './components/main'
import { Cart, PsysicalCart, DigitalCart } from './components/cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Home></Home>} />
          {/* <Route path="/ProgrammingBooks" element={<></>} /> */}
          {/* <Route path="/Hobbit" element={<></>} /> */}
        </Route>

        <Route path="/Cart" element={<Cart></Cart>}>
          <Route index element={<PsysicalCart></PsysicalCart>} />
          <Route path="/Cart/Physical" element={<PsysicalCart></PsysicalCart>} />
          <Route path="/Cart/Digital" element={<DigitalCart></DigitalCart>} />
        </Route>
        {/* <Route path="/Profile" element={<Profile></Profile>}>
          <Route index element={<MyProfile></MyProfile>} />
          <Route path="/Profile/Orders" element={<Orders></Orders>} />
          <Route path="/Profile/Wishlist" element={<Wishlist></Wishlist>} />
          <Route path="/Profile/Authorize" element={<Authorize></Authorize>} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
