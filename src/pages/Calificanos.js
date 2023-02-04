import "tailwindcss/tailwind.css";
import React from 'react';
import { useState } from "react";
import Swal from 'sweetalert2'



const Calificanos = ()  => {
  const [number, setCalification] = useState ("");
  const [state, setState] = useState (false);

  const calificacion = (number, state) => {
      if(number >= 0 && number<=2){
        Swal.fire('No me gustó esta recomendacion')
      }else if(number == 3){
        <h1>Muy regular</h1>
        Swal.fire('Muy regular')
      }else if(number==4 || number==5){
        Swal.fire('Excelente recomendacion')
        return "Excelente recomendacion"
      }else if (number > 5){
        Swal.fire('Gracias por tu califación tan alta, pero la calificación es hasta 5 :D')
      }
  }

    return (
        
        <div class="inicio relative h-screen overflow-hidden bg-[#252831]">
            <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-100 just max-w-2xl mx-auto py-4 px-6 rounded-lg shadow-xl">
  <div className="flex items-center justify-between mb-4">
    <p className="text-gray-500 uppercase text-sm">Gracias por mirarnos</p>
    <span className="bg-yellow-400 text-white py-2 px-4 text-xs rounded uppercase">
      Petali
    </span>
  </div>
  <div className="flex flex-col gap-2 mb-4">
    <h1 
      className="text-2xl text-gray-700 font-bold"
    >
    ¡Que esperas para calificarnos!
    </h1>
    <p className="text-gray-600">
      Calificanos en un rango de 0 a 5, donde 0 es lo mas bajo y quiere decir que nuestras recomendaciones no te gutaron y 5 el más alto donde pudiste encontrar el lugar indicado para pasear a tu amiguito.
    </p>
  </div>
  <div className="flex items-center justify-center">
    
  <input
          type="calificación"
          id="calificacion"
          name="calificacion"
          autoComplete="off"
          className="w-25 bg-gray-100 p-2  py-2 px-4 bg-transparent border rounded mt-2 outline-none focus:border-yellow-400"
          placeholder="Ingresa tu calificación"
          onChange={(e) => setCalification(e.target.value)}
          
        />
        <button
          type="submit"
          className="w-50 bg-gray-100 p-2 py-2 rounded mt-2 hover:bg-yellow-400 transition-colors"
          onClick={() => calificacion(number)}

        >
          Enviar
        </button>
      
  </div>
</div>
</div>

        </div>
    
    );

   
}

export default Calificanos;