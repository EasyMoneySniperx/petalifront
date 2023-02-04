import "tailwindcss/tailwind.css";
import React from 'react';
import '../assets/css/Login.css';
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; 
import Mapa from "./Mapa";


const Login = ()  => {
  const navigate = useNavigate();

const [username, setUsername] = useState ("");
const [password, setPassword] = useState ("");

    
const handleSubmit = async (e) =>{
  try{
    const res = await login(username, password);
      navigate("/mapa");
  }catch (error){
    console.log(error.message);
  }
};

const handleGoogleSigin = async() => {
  try{
    await loginWithGoogle();
    navigate("/mapa");
  }catch (error){
    console.log(error.message);
  }
}

const {login, loginWithGoogle} = useAuth()


    return (
        <div className="min-h-screen bg-[#252831] grid grid-cols-1 lg:grid-cols-2">
  <div className="text-white flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto">
    
    <div className="flex flex-col gap-1 w-full">
      <h1 className="text-4xl font-medium">Iniciar sesión</h1>
      <p className="text-gray-400">
        Ingresa a Petali con las credenciales de tu amiguito.
      </p>
    </div>
   
    <div className="w-full">
      <button
       onClick={handleGoogleSigin}
        type="button"
        className="w-full flex items-center justify-center gap-2 border p-2 px-4 rounded-full"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
          alt="login alt"
          width="20"
          height="20"
        />
        <span className="ml-2">Ingresar con Google</span>
      </button>
    </div>
    
    <form className="flex flex-col gap-4">
      <div>
        <label htmlFor="email" className="text-gray-200">
          Nombre mascota *
        </label>
        <input
          id="username"
          name="username"
          autoComplete="off"
          className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
          placeholder="Ingresa el nombre de tu mascota"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password" className="text-gray-200">
          Contraseña *
        </label>
        <input
          type="password"
          id="password"
          name = "password"
          autoComplete="off"
          className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
          placeholder="Ingresa tu contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 order-2 md:order-1">
        <span className="text-gray-400">
          ¿No tienes cuenta?{" "}
          <a
            href="register"
            className="text-indigo-400 hover:text-indigo-500 transition-colors"
          >
            Registrate
          </a>
        </span>
        <a
          href="/#"
          className="text-gray-400 hover:text-gray-200 transition-colors"
        >
          ¿Olvidaste tu contraseña?
        </a>
      </div>
      <div className="mt-4 order-1 md:order-2">
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-indigo-700 p-2 rounded-full hover:bg-indigo-800 transition-colors"
        >
          Iniciar sesión
        </button>
      </div>
    </form>
  </div>

  <div className="bgr hidden lg:block"></div>
</div>

    );
}

export default Login;