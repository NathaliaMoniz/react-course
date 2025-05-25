import React from "react";

const ComponentB = ({texto_boton, handleClick}) => { // Componente B que recibe props
    const MyValue = "Valor desde el hijo"
    /*const handleClick = () => {
        alert("¡Botón presionado!");
    }*/
    return (
        
        <div className='container_boton'> 
            <button onClick={() => {handleClick(MyValue)}}>{texto_boton}</button> 
        </div>
        /*<div className='container_boton'> 
             <button onClick={handleClick}>{texto_boton}</button> // boton manejado por si mismo (es un componente no controlado)
        </div>*/
    );
}
export default ComponentB; // Exportamos el componente B