import React from "react";

const ComponentA = ({ emoji, titulo }) => { // Componente A que recibe props
    return (
        //clase container para aplicar estilos
        <div className='container'> 
            <div>{emoji}</div>
            <h1>Componente A</h1>
            <p>{titulo}</p>
        </div>
    );
}
export default ComponentA;