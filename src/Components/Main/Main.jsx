import React from 'react'
import "./Main.css"
import yo from "./../../image/yo.jpg"

const Main = () => {
    return (
        <>
            <main className="main">
                <section className="main-content perfil">
                    <h2 className="title">Cristian Chipana</h2>
                    <h5>Estudiante and Programador</h5>
                    <p>Lorem ipsum dolor,uam error dolore deleniti quasi quos nostrum distinctio, autem beatae! BeaAmet, omne, adipisci possimus quae itaque ducimus iusto maiores</p>
                    <p>Lorem ipsum dolor,uam error dolore deleniti quasi quos nostrum distinctio, autem beatae! BeaAmet, omne, adipisci possimus quae itaque ducimus iusto maiores</p>
                    <p>Lorem ipsum dolor,uam error dolore deleniti quasi quos nostrum distinctio, autem beatae! BeaAmet, omne, adipisci possimus quae itaque ducimus iusto maiores</p>
                    <p>Lorem ipsum dolor,uam error dolore deleniti quasi quos nostrum distinctio, autem beatae! BeaAmet, omne, adipisci possimus quae itaque ducimus iusto maiores</p>
                </section>

                <section className="main-content foto">
                    <img src={yo} alt="caminar"/>
                </section>

                <section className="main-content caracteristicas">
                    <h2>Mis Habilidades</h2>
                    <div className="main-section">
                        <div className="main-section__item">
                            <div className="main-section__data">
                                <p>Desarrollo Web Frontend</p>
                                <p>40%</p>
                            </div>
                            <div className="main-section__barra " >
                                <span className="aa fronend"></span>
                            </div>
                        </div>
                        <div className="main-section__item">
                            <div className="main-section__data">
                                <p>Desarrollo Web Backend</p>
                                <p>60%</p>
                            </div>
                            <div className="main-section__barra " >
                                <span className="aa backend"></span>
                            </div>
                        </div>
                        <div className="main-section__item">
                            <div className="main-section__data">
                                <p>Desarrollo Apps Mobiles</p>
                                <p>5%</p>
                            </div>
                            <div className="main-section__barra " >
                                <span className="aa app"></span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Main
