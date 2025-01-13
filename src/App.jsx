import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Routes>
        <Route path="/home" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
      </Routes>
    </div>
  );
}

export default App;
