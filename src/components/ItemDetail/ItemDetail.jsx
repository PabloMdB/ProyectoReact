import React, { useContext, useState } from "react";
import './itemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import { Context } from "../../context/Context";



const ItemDetail = ( {item} ) => {
    

    const { agregarAlCarrito} = useContext(Context);
    


    const [cantidad, setCantidad] = useState(1);
        
        const restarCantidad = () =>{
            cantidad > 1 && setCantidad(cantidad - 1);
        }
        
        const sumarCantidad = () =>{
            cantidad < item.stock  && setCantidad(cantidad + 1);
        }

        return (
        <div className="container">
            <div className="producto-detalle">
                <img src={item.img} alt={item.nombre} />
                <div>
                    <h3 className="titulo">{item.nombre}</h3>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="categoria">{item.categoria}</p>
                    <p className="precio">${item.precio}</p>
                    <ItemCount 
                    cantidad={cantidad} 
                    sumarCantidad={sumarCantidad} 
                    restarCantidad = {restarCantidad} 
                    agregarAlCarrito={() => {agregarAlCarrito(item, cantidad)}} />
                </div>
            </div>

        </div>
        )
    };

export default ItemDetail