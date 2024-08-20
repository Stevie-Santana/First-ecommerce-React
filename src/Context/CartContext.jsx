import { createContext, useState } from "react";


//creamos contexto de React llamado CartContext
const CartContext = createContext();


const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarProductos = (producto) => {
        console.log('Producto que se intenta agregar:', producto);

        const condicion = estaEnElCarrito(producto.id);

        if (condicion) {
            //sumar la cantidad nueva de productos
            const productosModificados = carrito.map((productoCarrito) => {
                if (productoCarrito.id === producto.id) {
                    return { ...productoCarrito, cantidad: productoCarrito.cantidad + producto.cantidad};
                }else{
                    return productoCarrito;
                }

            });

            setCarrito(productosModificados);
        } else {
            //agregar producto nuevo
            setCarrito([...carrito, producto]);
        }
    };
    
    const estaEnElCarrito = (idProducto) => {
        const condicion = carrito.some((producto) => producto.id === idProducto);
        return condicion;
    }

    const cantidadTotal = () => { 
        const cantidad = carrito.reduce( ( total, producto ) => total + producto.cantidad, 0 );
        return cantidad; 
    }

    const precioTotal = () => { 
        const precio = carrito.reduce( (total, productoCarrito ) => total + (productoCarrito.cantidad * productoCarrito.price ), 0 )
        return precio 
    }
   
    const vaciarCarrito = () => {
        setCarrito([]);
    };

    const borrarProductoPorId = (idProducto) => {
        const productosFiltrados = carrito.filter( 
            (productoCarrito) => productoCarrito.id !== idProducto);
        setCarrito(productosFiltrados);
    };
   

    return(
        <CartContext.Provider value={ {carrito, agregarProductos, borrarProductoPorId, vaciarCarrito, cantidadTotal, precioTotal} }>
            { children }
        </CartContext.Provider>
    );
}; 

export { CartProvider, CartContext };