import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Marvel</h2>
          <p className="text-sm">© 2024 Marvel-App. Tout droit réservé</p>
        </div>
        <div className="flex flex-col gap-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            About
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Services
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Contact
          </a>
        </div>
        <div className="flex flex-col gap-8 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon className="w-6 h-6" icon={faGithub} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon className="w-6 h-6" icon={faLinkedin} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon className="w-6 h-6" icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
