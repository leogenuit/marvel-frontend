import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Header from "./components/Header";
import CharacterComics from "./pages/CharacterComics";
import { useState } from "react";
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
      </Routes>
    </Router>
  );
};

export default App;
