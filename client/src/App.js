import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Playlist from "./components/Playlist";
import Footer from "./components/Footer";
import {Routes,Route } from "react-router-dom";


function App() {
  return (
    <>
      {/* header or footer common hai isliye inko routes ke bahar rakhenge */}
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/playlist" element={<Playlist />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
