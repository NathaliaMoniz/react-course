import React from "react";

const Producto = ({ product, onClick }) => {
    return (
        <div className="col_card">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{product.nombre}</h5>
                    <p className="card-text">${product.precio}</p>
                    <button href="#" className="btn btn-primary" 
                    onClick={onClick}
                    >Remover</button>
                </div>
            </div>
        </div>
    );
}
export default Producto;