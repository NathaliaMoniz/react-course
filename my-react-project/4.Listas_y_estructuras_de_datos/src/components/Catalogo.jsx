import React from "react";
import Producto from "./Product";
const Catalogo = () => {

    const products = [
        { id:1, name: "Camiseta", price: 19.99, category: "Ropa" },
        { id:2, name: "Pantalones", price: 39.99, category: "Ropa" },
        { id:3, name: "Zapatillas", price: 59.99, category: "Calzado" },
        { id:4, name: "Gorra", price: 15.99, category: "Accesorios" },
        { id:5, name: "Chaqueta", price: 89.99, category: "Ropa" }
    ];
    return (
        <>
            <h1>Catálogo de Productos</h1>

            {products.length === 0 ? (
                <p>
                    No hay productos en el catálogo.
                </p>
            ) : (
                <div className="products">
                    {products.map(
                        (product) => (
                            <Producto key= {product.id} product={product}/>
                        )
                    )}
                </div>
            )}
           
        </>
    );
}

export default Catalogo;