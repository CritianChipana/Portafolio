import React from 'react'
import "./Pregunta.css"

const Pregunta = ({ask="¿Qué te ofrezco?"}) => {
    return (
        <div>
            <div className="pregunta"><p className="section-title">{ask}</p></div>
        </div>
    )
}

export default Pregunta
