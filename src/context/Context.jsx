import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext();

export const ContextProvider = ({ children }) => {
    
    const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    try {
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    } catch (error) {
        console.error("Error al cargar el carrito del localStorage:", error);
        return [];
    }
    });

    useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find((prod) => prod.id === itemAgregado.id);

        if (estaEnElCarrito) {
                estaEnElCarrito.cantidad += cantidad;
                    setCarrito(nuevoCarrito);
        } else {
                nuevoCarrito.push(itemAgregado);
                    setCarrito(nuevoCarrito); // Corrección: Actualizar el estado con el nuevo carrito
        }

        toast("Productos agregado");

        };

    const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    };

    const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    };

    const vaciarCarrito = () => {
    setCarrito([]);
    toast("Producto vaciado");
    };

    return (
    <Context.Provider
            value={{
        carrito,
        agregarAlCarrito,
        cantidadEnCarrito,
        precioTotal,
        vaciarCarrito,
    }}
    >
    {children}
    </Context.Provider>
);
};