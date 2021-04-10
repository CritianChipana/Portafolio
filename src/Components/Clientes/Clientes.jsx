import React from 'react'
import "./Clientes.css"
import yo2 from "./../../image/yo2.jpg"
import Pregunta from '../Pregunta/Pregunta'
const Clientes = () => {
    return (
        <>
            <div className="clientes">
                {/* <div className="clientes-name">
                    <p className="clientes-titulo">Mis clientes dicen</p>
                </div> */}
                <Pregunta ask="Mis clientes dicen"/>
                <div className="cliente-contenedor" >
                    <div className="blanco">
                        <div className="perfil2">
                            <img src={yo2} alt="cac"/>
                        </div>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam pariatur a placeat nihil rerum in, asperiores optio labore quod quo.it. Veniam pariatur a placeat nihil rerum in, asperiores optio labore quod quoit. Veniam    placeat nihil rerum in, asperiores optio labore quod quo</h4>
                        <h5>Valeria Vicente</h5>
                        <h6>Puesto del CLiente</h6>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Clientes
