import logo from './logo.svg';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Favorites from './Pages/Favourites';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useState } from 'react';

function App() {
  const [favorites, setFavorites] = useState([]);
  return (
    <div className="App">
      <Navbar/>
      <div style={{marginTop:"60px"}}>
     <Routes>
          <Route path="/" element={<Home favorites={favorites} setFavorites={setFavorites} />} />
          <Route path="/favorites" element={<Favorites favorites={favorites}/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
     </Routes></div>
    </div>
  );
}

export default App;
