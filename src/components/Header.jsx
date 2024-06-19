import React from "react";
import logoMarvel from "../assets/img/logo-marvel.png";
import { Link } from "react-router-dom";
import Button from "./Button";
import ButtonSecondary from "./ButtonSecondary";
const Header = () => {
  return (
    <div className="py-8 mb-32 bg-red-marvel sticky top-0 shadow-box-shadow">
      <div className="flex items-center justify-evenly gap-8  mx-auto">
        <Link to="/">
          <img src={logoMarvel} alt="logo marvel" className="w-36" />
        </Link>
        <input type="text" className="border-2 w-80" />
        <nav className="flex gap-8">
          <div className="flex gap-2">
            <Link to="/">
              <Button text={"Personnage"} />
            </Link>
            <Link to="/comics" className="text-white">
              <Button text={"Comics"} />
            </Link>
            <Link to="#" className="text-white">
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
