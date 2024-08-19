import { useState, useContext } from "react";
import Formulario from "./Formulario";
import { CartContext } from "../../Context/CartContext";
import db from "../../db/db.js";
import { collection, addDoc } from "firebase/firestore";
import validateForm from "../../utils/validacionFormulario.js"; 

import "./Checkout.css";

const Checkout = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const [datosForm, setDatosForm] = useState(
    {
        nombre: "",
        telefono: "",
        email: "",
    });
    const [idOrden, setIdOrden] = useState(null);

    const guardrDatosInput = (event) => {
        setDatosForm({...datosForm, [event.target.name]: event.target.value });
    };

    const enviarOrden = async(event) => {
        event.preventDefault();
        //formatear la orden
        const datos = {
            comprador: { ...datosForm},
            productos: [...carrito],
            total: precioTotal(), 
        }; 
        //validar formulario previo a subir la orden
        const response = await validateForm(datosForm)
        if(response.status === "success"){
            //subir la orden
            subirOrden(datos);
        }else{
            //toast alert de libreria
            console.log(response.message);
        }
    };

    const subirOrden = (datos) => {
        const ordenRef = collection(db, "ordenes");
        addDoc(ordenRef, datos)
        .then((respuesta) => {
            setIdOrden(respuesta.id);
        })
        .finally(() => {
            vaciarCarrito()
        })
    };

    return (
        <div className="checkout">
            {idOrden ? (
                <div>
                    <h3>¡Orden realizada con exito!</h3>
                    <p>Codigo de orden: {idOrden} </p>
                </div>
            ) : (
                <Formulario
                datosForm={datosForm}
                guardrDatosInput={guardrDatosInput}
                enviarOrden={enviarOrden}
                />
            )}
        </div>
    );

};

export default Checkout;