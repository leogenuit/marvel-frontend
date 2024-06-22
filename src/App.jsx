import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Header from "./components/Header";
import CharacterComics from "./pages/CharacterComics";
import Favorites from "./pages/Favorites";
import SignUp from "./pages/auth/SignUp";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <Router>
      <Header search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/comics" element={<Comics search={search} />} />
        <Route path="/comics/:characterId" element={<CharacterComics />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
