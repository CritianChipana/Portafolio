import React from 'react'
import "./Home.css"
import Boton from  "./../Boton/Boton"
// import Public from 
const Home = () => {
    return (
        <>
            <div className="Home">
                <figure className="Home-image">
                </figure>
                <h1>Bienvenid@s a mi sitio Web</h1>
                <div className="btn">
                    <Boton descripcion="CONTACTAME" />
                </div>
            </div>
        </>
    )
}

export default Home
