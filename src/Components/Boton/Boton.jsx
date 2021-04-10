import React from 'react'
import "./Boton.css"
const Boton = ({descripcion ="DESCARGAR CV"}) => {
    return (
        <>
            <div className="btn-cv">
                <input className="btn-cv--boton" type="button" value={descripcion}/>
            </div>
        </>
    )
}

export default Boton
