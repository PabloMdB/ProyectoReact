import { useForm } from 'react-hook-form'
import './Contacto.css'


const Contacto = () => {

    const{ register, handleSubmit} = useForm();

    const enviar = (dato) =>{
        console.log(dato)
    }

    return (
            <div className="container">
                <h1 className="main-title">Contacto</h1>
                <form className='formulario' onSubmit={handleSubmit(enviar)}>
                    <input type="text" placeholder='Ingresa tu Nombre' {...register("nombre")} />
                    <input type="email" placeholder='Ingresa tu Email' {...register("email")} />
                    <input type="tel" name="phone" placeholder="Ingresa tu telefono" required  {...register("telefono")}/>
                    <button className="enviar" type='submit'>Enviar</button>
                </form>
            </div>
    )
}

export default Contacto
