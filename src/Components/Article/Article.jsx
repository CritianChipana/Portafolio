import React from 'react'
import "./Article.css"
import Baile from "./../../image/BAILE.jpg"
import Cafe from "./../../image/CAFE.jpg"
import Code from "./../../image/CODE.jpg"
import DESTOCK2 from "./../../image/DESTOCK2.jpg"
import MERRY from "./../../image/MERRY.jpg"
import Ofiice from "./../../image/OFIICE.jpg"
import Pregunta from '../Pregunta/Pregunta'



const Article = () => {
    return (
        <>
            <article  className="article">
                {/* <div className="pregunta">
                    <p className="article-title">Mis Trabajos</p>
                </div> */}
                <Pregunta ask="Mis Trabajos"/>
                <div className="article-content">
                    <div className="article-content--item">
                        <img src={Baile} alt="No se encontro la imagen"/>
                    </div>
                    <div className="article-content--item">
                        <img src={Cafe} alt="No se encontro la imagen"/>
                    </div>
                    <div className="article-content--item">
                        <img src={Code} alt="No se encontro la imagen"/>
                    </div>
                    <div className="article-content--item">
                        <img src={DESTOCK2} alt="No se encontro la imagen"/>
                    </div>
                    <div className="article-content--item">
                        <img src={MERRY} alt="No se encontro la imagen"/>
                    </div>
                    <div className="article-content--item">
                        <img src={Ofiice} alt="No se encontro la imagen"/>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Article
