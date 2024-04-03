import { useState } from 'react'
import React from 'react';
import {BrowserRouter, Router, Routes, Route} from "react-router-dom";
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
