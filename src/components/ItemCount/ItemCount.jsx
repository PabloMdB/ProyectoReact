import './ItemCount.css'



const ItemCount = ({cantidad, sumarCantidad, restarCantidad, agregarAlCarrito}) => {


    return (
        <div>

            <div className="item-count">
                <button onClick={restarCantidad}>-</button>
                <p className='cantidad'>{cantidad}</p>
                <button onClick={sumarCantidad}>+</button>
            </div>
            <button className="agregar-carrito" onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
