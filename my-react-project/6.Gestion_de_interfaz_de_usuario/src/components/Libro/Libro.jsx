import React from "react"
import './Libro.css'
import style from 'styled-components'
import { useState } from "react"

const Libro = ({libro}) => {

    const Titulo = style.h2`
        display: block;
        color: #333;
    `

    const [miClase, setMiClase] = useState('default')
    return(

        <>

            <div className={'card col-md-3 ' +  miClase}>
                <div className="card-body">
                    <h5 className="card-title">{libro.titulo}</h5>
                    <p className="card-text">Publicado en {libro.añoPublicacion}</p>
                    <button className="btn btn-primary" onClick={() => {setMiClase('seleccionado')}}>Seleccionar</button>
                </div>
            </div>
        
        </>
    )

}

export default Libro