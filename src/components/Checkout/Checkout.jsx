import React, { useContext, useState } from 'react'
import { Context } from '../../context/Context';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Loader from '../Loader/Loader';
import './Checkout.css'

const Checkout = () => {

        const [pedidoId, setPedidoId] =useState("");

        const {carrito, precioTotal, vaciarCarrito} = useContext(Context);
    
        const{ register, handleSubmit} = useForm();
        
        const [loading, setLoading] = useState (true);

        const comprar = (dato) =>{
                const pedido={
                    cliente:dato,
                    productos: carrito,
                    total: precioTotal()
                }
                console.log(pedido);

                const pedidosRef = collection(db, "pedidos");

                addDoc(pedidosRef, pedido)
                    .then((doc) => {
                        setPedidoId(doc.id);
                    vaciarCarrito();
                })

                setTimeout(() => {
                    setLoading(false)
                }, 3000);
            };
            
            if(pedidoId){
                return(
                    loading
                    ?
                    <Loader />
                    :
                    <div className="container">
                        <h1 className="pedido">Muchas Gracias por tu pedido: </h1>
                        <p>tu numero de pedido es: <b>{pedidoId}</b></p>
                    </div>
                )
            };
            return (
                
                <div className="container">
                        <h1 className="main-title">Finalizar compra</h1>
                        <form className='formulario' onSubmit={handleSubmit(comprar)}>
                            <input type="text" placeholder='Ingresa tu Nombre' {...register("nombre")} />
                            <input type="email" placeholder='Ingresa tu Email' {...register("email")} />
                            <input type="tel" name="phone" placeholder="Ingresa tu telefono" required  {...register("telefono")}/>
                            <button className="enviar" type='submit'>Comprar</button>
                        </form>
                    </div>
                
                
            )
            
            
                
            }
            
            export default Checkout
            