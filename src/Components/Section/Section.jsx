import React from 'react'
import Pregunta from '../Pregunta/Pregunta'
import "./Section.css"
const Section = () => {
    return (
        <>
            <section className="section">
                {/* <div className="pregunta"><p className="section-title">¿Qué te ofrezco?</p></div> */}
                <Pregunta/>
                <div className="section-content">
                    <div className="section-content--code" >
                        <i className="fas fa-code"></i>
                        <h2>Programacion</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt. Laborum nihil nesciunt aliquam natus?</p>
                    </div>
                    <div className="section-content--laptop" >
                        <i className="fas fa-stream"></i>
                        <h2>Base de Datos</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt. Laborum nihil nesciunt aliquam natus?</p>
                    </div>
                    <div className="section-content--keyboard" >
                        <i className="fas fa-stream"></i>
                        <h2>Matematica Discreta</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt. Laborum nihil nesciunt aliquam natus?</p>
                    </div>
                    <div className="section-content--code" >
                        <i className="fas fa-code"></i>
                        <h2>Redes</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt. Laborum nihil nesciunt aliquam natus?</p>
                    </div>
                    <div className="section-content--laptop" >
                        <i className="fas fa-keyboard"></i>
                        <h2>Informatica</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt. Laborum nihil nesciunt aliquam natus?</p>
                    </div>
                    <div className="section-content--keyboard" >
                        <i className="fas fa-keyboard"></i>
                        <h2>Gestion de Procesos</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt. Laborum nihil nesciunt aliquam natus?</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section
