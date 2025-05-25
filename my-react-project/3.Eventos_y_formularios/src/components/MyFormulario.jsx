import React from "react";

const MyForm = () => {

    const activateEvent = (event) => {
        console.log("Evento activado", event.type); // Muestra el tipo de evento activado
    }

    const activateInput = (event) => {
        event.stopPropagation(); // Evita que el evento se propague al elemento padre o cualquier otro elemento anidado
        console.log("Input activado", event.type); // Muestra el tipo de evento activado
    }

    const activateForm = (event) => {
        event.stopPropagation(); // Evita que el evento se propague a elementos hijos
        console.log("Form activado", event.type); // Muestra el tipo de evento activado
    }

    const [formData, setFormData] = React.useState({
        name: "",
        email: "example@gmail.com",
        password: ""
    });

    const [formErrors, setFormErrors] = React.useState({
        name: "",
        email: "",
        password: ""
    });

    const proccessChange = (event) => {
        const { name, value } = event.target; // Desestructuramos el nombre y el valor del input
        setFormData((prevFormData) => ({
            ...prevFormData, // Mantenemos los datos previos
            [name]: value // Actualizamos el campo correspondiente
        }));

        setFormErrors((prevFormErrors) => ({
            ...prevFormErrors, // Mantenemos los errores previos
            [name]: "" 
        }));

    
    }

    const proccessSubmit = (event) => {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
        console.log("Formulario enviado", formData); // Muestra los datos del formulario al enviarlo

        const errors = {};

        if (formData.name.trim() === "") {
            errors.name = "El nombre es obligatorio";
        }
        if (formData.email.trim() === "") {
            errors.email = "El email es obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "El email no es válido";
        }
        if (formData.password.trim() === "") {
            errors.password = "La contraseña es obligatoria";
        } else if (formData.password.length < 6) {
            errors.password = "La contraseña debe tener al menos 6 caracteres";
        }
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors); // Actualiza los errores del formulario
        }else {
            console.log("Datos del formulario válidos", formData); // Muestra los datos del formulario si no hay errores
        }
        
    }

    return (
        <div className="box">
            <form autoComplete="off" onSubmit={proccessSubmit}/*onClick={activateForm}*/>
                <div>
                    <label htmlFor="user" /*onMouseOver={activateEvent}*/>Username:  </label> {/*Evento onMouseOver*/}
                    <input type="text" id="name" name="name" value={formData.name} onChange={proccessChange}/>
                </div>
                
                {formErrors.name && <span className="error">{formErrors.name}</span>}
                <div>
                    <label htmlFor="email">Email:  </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={proccessChange}/*onClick={activateInput}*//> {/* Evento onChange*/}
                </div>

                {formErrors.email && <span className="error">{formErrors.email}</span>}
                <div>
                    <label htmlFor="password" /*onClick={activateEvent}*/>Password:  </label> {/* Evento onClick*/}
                    <input type="password" id="password" name="password" value={formData.password} onChange={proccessChange}/>  
                </div>

                {formErrors.password && <span className="error">{formErrors.password}</span>}
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default MyForm; // Exportamos el componente MyForm