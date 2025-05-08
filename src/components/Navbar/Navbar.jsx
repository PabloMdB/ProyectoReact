import { Link } from 'react-router'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

function Navbar() {

    return (
        <header>
            <nav className="nav-bar">
            <p className='logo'>Shopping Ls</p>
                <ul className="menu">
                    <li> <Link  className="menu-enlace" to="/">Inicio</Link></li>
                    <li> <Link  className="menu-enlace" to="/productos">Productos</Link></li>
                    <li> <Link  className="menu-enlace" to="/productos/computadora">Computadoras</Link></li>
                    <li> <Link  className="menu-enlace" to="/productos/celular">Celulares</Link></li>
                    <li><CartWidget /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
