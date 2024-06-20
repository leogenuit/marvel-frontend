import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Header from "./components/Header";
import Character from "./pages/Character";
import CharacterComics from "./pages/CharacterComics";
import "./App.css";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:characterId" element={<CharacterComics />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </Router>
  );
};

export default App;
