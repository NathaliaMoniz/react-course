import React from "react";
import Libro from "../Libro/Libro";

const Catalogo = () => {
    const libros = [
        {
          id: 1,
          titulo: "Cien años de soledad",
          añoPublicacion: 1967
        },
        {
          id: 2,
          titulo: "1984",
          añoPublicacion: 1949
        },
        {
          id: 3,
          titulo: "Don Quijote de la Mancha",
          añoPublicacion: 1605
        },
        {
          id: 4,
          titulo: "Orgullo y prejuicio",
          añoPublicacion: 1813
        },
        {
          id: 5,
          titulo: "El principito",
          añoPublicacion: 1943
        },
        {
          id: 6,
          titulo: "Fahrenheit 451",
          añoPublicacion: 1953
        },
        {
          id: 7,
          titulo: "La sombra del viento",
          añoPublicacion: 2001
        },
        {
          id: 8,
          titulo: "Crónica de una muerte anunciada",
          añoPublicacion: 1981
        }
      ];
    
    return (
        <>
            <div className="row" >
                {libros.map(
                    (libro) => (
                        <Libro key={libro.key} libro={libro}/>  
                    )
                )}
            </div>
        </>
    )
      
}

export default Catalogo