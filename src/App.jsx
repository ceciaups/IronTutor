import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
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
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <main>
        <Home />
        <About />
        <Courses />
        <Inspiration />
        <FAQ />
        <Footer />
      </main>
      <Popup />
    </div>
  )
}

export default App
