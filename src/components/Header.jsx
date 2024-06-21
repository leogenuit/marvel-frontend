import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import Button from "./Button";
import ButtonSecondary from "./ButtonSecondary";
const Header = ({ search, setSearch }) => {
  return (
    <div className="py-8 mb-16 bg-gradient-to-r from-blue-dark-marvel to-blue-light-marvel sticky top-0 shadow-box-shadow">
      <div className="flex items-center justify-evenly gap-8  mx-auto">
        <Link to="/">
          <img src={logo} alt="logo marvel" className="w-40" />
        </Link>
        <input
          className="border-2 w-80"
          type="text"
          placeholder="Rechercher..."
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
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
          <div className="flex gap-2">
            <Link to="#" className="text-white">
              <ButtonSecondary text={"S'inscrire"} />
            </Link>
            <Link to="#" className="text-white">
              <ButtonSecondary text={"Connexion"} />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
