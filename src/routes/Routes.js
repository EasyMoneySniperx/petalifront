import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Inicio from "../pages/Inicio";
import Mapa from "../pages/Mapa";
import { AuthProvider } from "../context/authContext";
import Calificanos from "../pages/Calificanos";


function App(){
    return(
        
        <BrowserRouter>
        <AuthProvider>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/mapa" element={<Mapa/>}/>
            <Route path="/" element={<Inicio/>}/>     
            <Route path="/calificanos" element={<Calificanos/>}/>        
        </Routes>
        </AuthProvider>
        </BrowserRouter>
      
    )
}


export default App;