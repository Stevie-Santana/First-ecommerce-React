import {string, object, mixed } from "yup";

let userSchema = object ({
    nombre: string().required("El campo nombre debe ser completado"),
    telefono: mixed().required("El campo telefono debe ser completado"),
    email: string().email("El campo email debe ser un email válido").required("el campo email es requerido")
})

const validateForm = async (dataForm) => {
    try {
        await userSchema.validate(dataForm)
        return { status: "success"}
    } catch (error) {
        return {status: "error", message: error.message }
    }
}

export default validateForm;