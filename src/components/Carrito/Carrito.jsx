import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { Link } from 'react-router';
import './Carrito.css'

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(Context);
    
    const vaciar = () =>{
        vaciarCarrito();
    }

    return (
        <div className='container'>
            <h1 className="main title">Carrito</h1>
        

        {
            carrito.map((prod)=>(
                <div key ={prod.id}>
                <br/>
                <h3>{prod.nombre}</h3>
                <p>precio unid: ${prod.precio}</p>
                <p>Cantidad: {prod.cantidad}</p>
                <p>precio Total: ${prod.precio * prod.cantidad}</p>
                <br/>
                </div>
            ))
        }

        {carrito.length > 0 ?

        <>
            <h2>precio total: ${precioTotal()}  </h2>
            <button className='button' onClick={vaciar}>Vaciar</button>
            <Link className='finalizar' to="/checkout">Finalizar compra</Link>
        </>:
        <h2>El carrito esta vacio : 🗑 </h2>
        
        }
        

        
        </div>
    )
}

export default Carrito
