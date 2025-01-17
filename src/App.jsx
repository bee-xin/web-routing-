import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import "./App.css";
import Services from "./Pages/Services/Services";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Content from "./components/Content/Content";
function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Routes>
        <Route index element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/portfolio" element={<Portfolio></Portfolio>} />
        <Route path="/services" element={<Services></Services>} />
      </Routes>
    </div>
  );
}

export default App;
