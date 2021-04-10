import React from 'react'
import "./Nav.css"

const Nav = () => {
    return (
        <>
            <div className="firex" >
                <nav className="nav-content">
                    <div className="nav-content__logo" >
                        <p>Cristian Chipana</p>
                    </div>
                    <ul className="nav-content__ul">
                        <li  className="nav-content__list"><a className="nav-content__link" href={'as'}>Home</a></li>
                        <li className="nav-content__list"><a className="nav-content__link" href="a">Acerca</a></li>
                        <li className="nav-content__list"><a className="nav-content__link" href="a">Servicios</a></li>
                        <li className="nav-content__list"><a className="nav-content__link portafolio" href="a">Portafolio</a></li>
                        <li className="nav-content__list"><a className="nav-content__link" href="a">Testimonios</a></li>
                        <li className="nav-content__list"><a className="nav-content__link" href="a">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Nav
