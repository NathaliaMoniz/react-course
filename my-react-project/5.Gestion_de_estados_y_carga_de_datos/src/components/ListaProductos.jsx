import React from "react";
import { DataContext } from "./DataContext";
import { useContext } from "react";

const ListaProductos = () => {
    const handleClick = (event) => {
        const id = event.id
        setData(prevData => prevData.map(item => item.id === id ? {...item, nombre: 'mi nombre'} : item))
      }
    
    const {data, setData} = useContext(DataContext)

    return (
        <div className="col-md-9">
            <h2>Productos</h2>
            <div className="rowa">

                {data.map(producto => (

                    <div className="col_card" key={producto.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">${producto.precio}</p>
                                <button href="#" className="btn btn-primary" 
                                onClick={()=>{ handleClick(producto) }}
                                >Comprar</button>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}
export default ListaProductos