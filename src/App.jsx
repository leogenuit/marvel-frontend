import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Header from "./components/Header";
import CharacterComics from "./pages/CharacterComics";
import Favorites from "./pages/Favorites";
import SignUp from "./pages/auth/SignUp";
import Footer from "./components/Footer";
import Login from "./pages/auth/Login";
import Cookies from "js-cookie";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [token, setToken] = useState(Cookies.get("token") || null);

  return (
    <Router>
      <Header
        search={search}
        setSearch={setSearch}
        token={token}
        setToken={setToken}
      />
      <Routes>
        <Route path="/" element={<Home search={search} token={token} />} />
        <Route path="/comics" element={<Comics search={search} />} />
        <Route path="/comics/:characterId" element={<CharacterComics />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/signup" element={<SignUp setToken={setToken} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
