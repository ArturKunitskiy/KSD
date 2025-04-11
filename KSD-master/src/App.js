import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
        <Route index element={<></>} />
        {/* <Route path="/ProgrammingBooks" element={<></>} /> */}
        {/* <Route path="/Hobbit" element={<></>} /> */}
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
