import React from "react";
import ComponentC from "./ComponentC"; // Importamos el Componente C
const ComponentA = ({ emoji, titulo }) => { // Componente A que recibe props
    return (
        //clase container para aplicar estilos
        <div className='container'> 
            <h1>< ComponentC emoji = {emoji}/></h1>
            <div><h1>{titulo}</h1></div>
        </div>
    );
}
export default ComponentA;