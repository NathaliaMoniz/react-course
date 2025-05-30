import React from "react";
import { useContext } from "react";
import Producto from "./Product";
import { DataContext } from "./DataContext";

const ListaCarrito = () => {

    const removerItem = (event) => {
        const id = event.id
        setData(prevData => prevData.map(item => item.id === id ? {...item, estatus: 'un-selected'} : item))
    }

    const {data, setData} = useContext(DataContext)
    const filteredItems = data.filter(item => item.estatus === 'selected')
    return(

        <div>
            <h2>Shoping cart</h2>
            <div className="rowa">
                {filteredItems.map(producto => (
                    <Producto key={producto.id} product={producto}
                        onClick={() => removerItem(producto)}
                    />
                ))}
            </div>
                
        </div>
    )
}

export default ListaCarrito