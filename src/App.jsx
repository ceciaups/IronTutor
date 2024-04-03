import { useState } from 'react'
import React from 'react';
import {BrowserRouter, Router, Routes, Route, useMatch} from "react-router-dom";
import './App.css'

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Inspiration from "./components/Inspiration";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

function App() {
  const match = useMatch(location.pathname);
  switch (true) {
    case match?.pathname === "/about": {
      document.title = "About";
      break;
    }
    case match?.pathname === "/courses": {
      document.title = "Courses";
      break;
    }
    case match?.pathname === "/inspiration": {
      document.title = "Inspiration";
      break;
    }
    case match?.pathname === "/faq": {
      document.title = "FAQ";
      break;
    }
    default: {
      document.title = "Home";
    }
  }
  document.title += " | Iron Tutor";

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/inspiration" element={<Inspiration />} /> 
          <Route path="/faq" element={<FAQ />} /> 
        </Routes>
        <Footer />
      </main>
      <Popup />
    </div>
  )
}

export default App
