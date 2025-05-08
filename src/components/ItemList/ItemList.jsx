import './ItemList.css'
import Item from "../Item/Item";
import React from "react";

const ItemList = ({productos, titulo}) =>{
    
    return(
        <div className='container'>
            <h2 className="menu-title">{titulo}</h2>
            <div className="productos">
            {productos.map((prod) => <Item producto={prod} key={prod.id} />)}                
            </div>
        </div>
    )
}

export default ItemList