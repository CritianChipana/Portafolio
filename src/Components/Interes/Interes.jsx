import React from 'react'
import Pregunta from '../Pregunta/Pregunta'
import "./Interes.css"
const Interes = () => {
    return (
        <div>
            <div className="interes">
                {/* <div className="interes-title">
                    <p>¿Interesado?</p>
                </div> */}
                <Pregunta ask="¿Interesado?"/>
                <div className="interes-content">
                    <div className="interes-content--item ubica">
                        <i className="fas fa-map-marker-alt"></i>
                        <h4>UBICACIÓN</h4>
                        <p>Perú Lima, Villa el salvador</p>
                    </div>

                    <div className="interes-content--item telefono">
                        <i className="fas fa-phone-square-alt"></i>
                        <h4>TELEFONO</h4>
                        <p>(+51)986661493</p>
                    </div>

                    <div className="interes-content--item email">
                        <i className="fas fa-envelope"></i>
                        <h4>EMAIL</h4>
                        <p>cristianchipan2@gmail.com</p>
                    </div>

                    <div className="interes-content--item social">
                        <i className="fab fa-github"></i>
                        <h4>Git Hub</h4>
                        <p>Perú Lima, Villa el salvador</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Interes
