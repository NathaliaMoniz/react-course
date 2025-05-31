import React from "react";
import Contents from "./Contents";
import { useParams } from "react-router-dom";

const Producto = ( ) => {

    const params = useParams();
    return (
        <>

        <h1>{params.nombreParam}</h1>
        <Contents/>
        </>
    );
}
export default Producto;