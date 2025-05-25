import React from "react";

const Producto = ({ product }) => {
    return (
        <div className="product">
            <h2>{product.name}</h2>
            <strong>Price: ${product.price}</strong>
            <p>Category: {product.category}</p>
            <button>Comprar</button>
        </div>
    );
}
export default Producto;