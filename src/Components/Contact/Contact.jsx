import React from 'react'
import Boton from '../Boton/Boton'
import "./Contact.css"
const Contact = () => {
    return (
        <div>
            <div className="contact">
                <div className="contact-content">
                    <form className="contact-form" action="#" method="post">
                        <input className="nombre" type="text" name="" id="" placeholder="Ingresa tu nombre"/>
                        <input className="correo" type="text" name="" id=""
                        placeholder="Ingresa tu correo"/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Ingrese su comentario"></textarea>
                        <Boton descripcion="COMENTAR"/>
                        {/* <input className="btn" type="submit" value="ENVIAR MENSAJE"/> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
