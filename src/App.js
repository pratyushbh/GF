import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homepage/homepage";
import Pp from "./pages/productPage/Pp";
import axios from "axios";
import SP from "./pages/selectionPage/SP";
import { WalletProvider } from "./context/walletContext/walletContext";
import Footer from "./components/footer/Footer.js";
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/sp' element={<SP />} />
          <Route path='/product/:id' element={<Pp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
