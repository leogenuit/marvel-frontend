import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import Button from "./Button";
import ButtonSecondary from "./ButtonSecondary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";

const Header = ({ token, setToken, search, setSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    Cookies.remove("token");
    setToken(null);
    setIsMenuOpen(false);
  };

  return (
    <div className="py-8 bg-gradient-to-r from-blue-dark-marvel to-blue-light-marvel sticky top-0 shadow-box-shadow">
      <div className="flex items-center justify-between md:justify-evenly gap-8 mx-auto px-4 md:px-0">
        <Link to="/">
          <img src={logo} alt="logo marvel" className="w-40" />
        </Link>
        <div className="relative flex items-center flex-grow md:flex-grow-0">
          <input
            className="rounded w-full md:w-80 py-2 px-4"
            type="text"
            placeholder="Rechercher..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <div className="absolute right-3 top-0 h-full flex items-center">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 px-2" />
          </div>
        </div>

        <div className="flex items-center md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon
              icon={isMenuOpen ? faTimes : faBars}
              className="text-white text-2xl"
            />
          </button>
        </div>

        <nav
          className={`${
            isMenuOpen
              ? "flex mt-12 flex-col items-center bg-gradient-to-r from-blue-dark-marvel to-blue-light-marvel"
              : "hidden"
          } md:flex flex-col md:flex-row gap-8 absolute md:static top-16 left-0 w-full md:w-auto  md:bg-transparent p-4 md:p-0 z-50`}
        >
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <Button text={"Personnages"} />
          </Link>
          <Link
            to="/comics"
            className="text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <Button text={"Comics"} />
          </Link>
          <Link
            to="/favorites"
            className="text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <Button text={"Favoris"} />
          </Link>
          {token ? (
            <button
              className="text-white bg-red-marvel rounded-2xl"
              onClick={handleLogout}
            >
              <ButtonSecondary text={"Déconnexion"} />
            </button>
          ) : (
            <div
              className={`${
                isMenuOpen
                  ? "flex mt-32 flex-col items-center bg-gradient-to-r from-blue-dark-marvel to-blue-light-marvel"
                  : "hidden"
              } md:flex flex-col md:flex-row gap-8 absolute md:static top-16 left-0 w-full md:w-auto  md:bg-transparent p-4 md:p-0 z-50`}
            >
              <Link
                to="/signup"
                className="text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <ButtonSecondary text={"S'inscrire"} />
              </Link>
              <Link
                to="/login"
                className="text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <ButtonSecondary text={"Connexion"} />
              </Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
