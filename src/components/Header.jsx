import React, { useEffect } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import Button from "./Button";
import ButtonSecondary from "./ButtonSecondary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";

const Header = ({ token, setToken, search, setSearch }) => {
  return (
    <div className="py-8 bg-gradient-to-r from-blue-dark-marvel to-blue-light-marvel sticky top-0 shadow-box-shadow">
      <div className="flex items-center justify-evenly gap-8 mx-auto">
        <Link to="/">
          <img src={logo} alt="logo marvel" className="w-40" />
        </Link>
        <div className="relative flex items-center">
          <input
            className="rounded w-80 py-2 px-4 "
            type="text"
            placeholder="Rechercher..."
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <div className="absolute right-3 top-0 h-full flex items-center">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 px-2" />
          </div>
        </div>

        <nav className="flex gap-8">
          <div className="flex gap-2">
            <Link to="/">
              <Button text={"Personnage"} />
            </Link>
            <Link to="/comics" className="text-white">
              <Button text={"Comics"} />
            </Link>
            <Link to="/favorites" className="text-white">
              <Button text={"Favoris"} />
            </Link>
          </div>
          {token ? (
            <button
              className="text-white"
              text={"Se deconnecter"}
              onClick={() => {
                Cookies.remove("token");
                setToken(null);
              }}
            >
              <ButtonSecondary text={"Déconnexion"} />
            </button>
          ) : (
            <div className="flex gap-2">
              <Link to="/signup" className="text-white">
                <ButtonSecondary text={"S'inscrire"} />
              </Link>
              <Link to="/login" className="text-white">
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
