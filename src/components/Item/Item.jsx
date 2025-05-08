import { Link } from 'react-router';
import './Item.css'
import React from "react";



const Item = ({producto}) =>{
    
    return(
        <div className="producto">
            <img src={producto.img}/>
            <div>
                <h4>{producto.nombre}</h4>
                <p> Precio: ${producto.precio}</p>
                <p>Categoria: {producto.categoria}</p>
                <Link className="ver-mas" to={`/item/${producto.id}`}>Ver Mas</Link>
            </div>
        </div>
    )
}

export default Item