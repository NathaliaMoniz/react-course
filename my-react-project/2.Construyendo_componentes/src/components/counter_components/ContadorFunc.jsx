import React, {useState} from 'react'

const ContadorFunc = () => {

    const [contador, setContador] = useState(0); // creamos el estado contador con el hook useState inicializado en 0
    const incrementar = () => {
        setContador(prevContador => prevContador + 1); // incrementamos el contador
    }
    const decrementar = () =>{

        setContador(prevContador => prevContador - 1); // decrementamos el contador
    }

    return (
        <div>
            <h1>Contador con función</h1>
            <p>count: {contador}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    )
}

export default ContadorFunc;