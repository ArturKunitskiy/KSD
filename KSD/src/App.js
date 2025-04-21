import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './components/main'
import {Home} from './components/home'
import { ScrollingText } from './components/main'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Home></Home>} />
          {/* <Route path="/ProgrammingBooks" element={<></>} /> */}
          {/* <Route path="/Hobbit" element={<></>} /> */}
        </Route>

        {/* <Route path="/Cart" element={<></>} /> */}
        {/* <Route path="/Profile/MyProfile" element={<></>} /> */}
        {/* <Route path="/Profile/Orders" element={<></>} /> */}
        {/* <Route path="/Profile/Wishlist" element={<></>} /> */}
        {/* <Route path="/Profile/Authorize" element={<></>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
