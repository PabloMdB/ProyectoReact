
import { Link } from 'react-router'
import { Context } from '../../context/Context'
import { useContext } from 'react'

const CartWidget = () => {

    const {cantidadEnCarrito} = useContext(Context);
    return (
        <div>
            <Link  className="menu-enlace" to="/carrito">
            🛒
            <span className='numerito'>{cantidadEnCarrito()}</span>
            </Link>
            
        </div>
    )
}

export default CartWidget
