import React from "react";
import logoMarvel from "../assets/img/logo-marvel.png";
import { Link } from "react-router-dom";
import Button from "./Button";
import ButtonSecondary from "./ButtonSecondary";
const Header = () => {
  return (
    <div className="border-b-2 py-8 mb-16 bg-red-marvel">
      <div className="flex items-center gap-32 w-11/12 mx-auto">
        <Link to="/">
          <img src={logoMarvel} alt="logo marvel" className="w-40" />
        </Link>
        <nav className="flex gap-20">
          <input type="text" className="border-2 w-96" />
          <div className="flex gap-6">
            <Link to="/">
              <Button text={"Personnage"} />
            </Link>
            <Link to="#" className="text-white text-lg">
              <Button text={"Comics"} />
            </Link>
            <Link to="#" className="text-white text-lg">
              <Button text={"Favoris"} />
            </Link>
          </div>
          <div className="flex gap-6">
            <Link to="#" className="text-white text-lg">
              <ButtonSecondary text={"S'inscrire"} />
            </Link>
            <Link to="#" className="text-white text-lg">
              <ButtonSecondary text={"Connexion"} />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
