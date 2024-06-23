import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = ({ setToken, isMenuOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [errorMailMessage, setErrorMailMessage] = useState(false);
  const [errorPasswordMessage, setErrorPasswordMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      // Vérify if mail and password are truthy
      if (email.length === 0) {
        return setErrorMailMessage("L'email est invalide");
      }
      if (!password) {
        return setErrorPasswordMessage("Le mot de passe est invalide");
      }
      const response = await axios.post(
        "https://leo--marvel--jb29wjf8x9mr.code.run/user/login",
        {
          email,
          password,
        }
      );
      if (response.data.token) {
        Cookies.set("token", response.data.token, { expires: 15 });
        setToken(response.data.token);
        setSuccessMessage("Connexion réussie !");
        setTimeout(() => {
          navigate("/");
        }, 1800);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="px-4 mx-auto pt-16 bg-gradient-to-l from-blue-light-marvel to-blue-dark-marvel pb-16">
      <h1 className="text-center text-white text-2xl mb-16">Se connecter</h1>
      <form
        className="md:w-1/3 flex flex-col mx-auto gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="email" className="text-white mb-2">
            Email
          </label>
          <input
            className={
              errorMailMessage
                ? "border-red-500 border-2 p-2 rounded-3xl"
                : "border-2 p-2 rounded-3xl"
            }
            type="email"
            placeholder="jean-dupont@gmail.com"
            id="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-white mb-2">
            Password
          </label>
          <input
            className={
              errorPasswordMessage
                ? "border-red-500 border-2 p-2 rounded-3xl mb-2"
                : "border-2 p-2 rounded-3xl mb-2"
            }
            type="password"
            placeholder="********"
            id="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <button className="border-2 text-white p-2 rounded-3xl">
          Se connecter
        </button>
      </form>
      <div className="w-1/3 mx-auto pt-4">
        {errorMailMessage && (
          <p className="text-red-500 text-center">{errorMailMessage}</p>
        )}
        {errorPasswordMessage && (
          <p className="text-red-500 text-center">{errorPasswordMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-center">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="text-center text-white">{successMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
