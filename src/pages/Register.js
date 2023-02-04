import "tailwindcss/tailwind.css";
import React from 'react';
import '../assets/css/Register.css';
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [user, setUser] = useState ({
        nick: "",
        email: "",
        password: "",
    });

    const {signup} = useAuth()

    const navegate = useNavigate()

    const handleChange = ({target:{name, value}}) => {
        setUser({...user, [name]: value})
    };

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            await signup(user.email, user.password)
            navegate("/mapa")
        }catch(error){
            console.log("error");

        }
        
    };

    return (

        <div className="min-h-screen bg-[#252831] grid grid-cols-1 lg:grid-cols-2">
            <div className="text-white flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto">

                <div className="flex flex-col gap-1 w-full">
                    <h1 className="text-4xl font-medium">Crear cuenta</h1>
                    <p className="text-gray-400">Registrate gratis a Petali.</p>
                </div>

                <div className="w-full">
                    <button
                        type="button"
                        className="w-full flex items-center justify-center gap-2 border p-2 px-4 rounded-full"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                            alt= "Register img"
                            width="20"
                            height="20"
                        />
                        <span className="ml-2">Registrate con Google</span>
                    </button>
                </div>

                <form className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="name" className="text-gray-200">
                            Nombre Mascota *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name= "nick"
                            autoComplete="off"
                            className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                            placeholder="Ingresa tu nombre completo"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-gray-200">
                            Correo electrónico *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name= "email"
                            autoComplete="off"
                            className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                            placeholder="Ingresa tu correo electrónico"
                            onChange={handleChange}
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
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 order-2 md:order-1">
                        <span className="text-gray-400">
                            ¿Ya tienes cuenta?{" "}
                            <a
                                href="login"
                                className="text-indigo-400 hover:text-indigo-500 transition-colors"
                            >
                                Ingresa
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
                            Crear cuenta
                        </button>
                    </div>
                </form>
            </div>
            <div className="bg hidden lg:block"></div>
        </div>
    );
}

export default Register;