import React ,{useState} from 'react'
import "./Footer.css"
const Footer = () => {


    return (
        <div>
            <footer className="footer">
                <div className="footer-content" >
                    <p>Copyright&copy; Cristian Alexis Chiapan Huaman - Portafolio Virtual- 8/03/2021</p>
                </div>
                <p>It is {new Date().toLocaleTimeString()}</p>
                {/* <p>{hora}</p> */}
            </footer>
        </div>
    )
}

export default Footer
