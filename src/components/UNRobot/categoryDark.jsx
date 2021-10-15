import { useState } from "react"; 
import "./categoryDark.sass"
import { Button } from 'react-bootstrap'
import Velocista from 'assets/img/velocista.png';

export const CategoryDark = ( {title, subtitle, description, img}) => {
    const [myTitle, setTitle]  = useState(title || "Título")
    const [mySubtitle, setSubtitle]  = useState(subtitle || "Subtítulo")
    const [myDescription, setDescription]  = useState( description ||"Diseña el robot más veloz y completa la pista en el menor tiempo posible")
    const [myImg, setImg]  = useState( img || Velocista)


    return (
        <div className = "category-div-dark">
            <div className = "img-div-dark  d-flex flex-column  justify-content-center align-items-start">
                <img src = { myImg  }></img>
            </div>
            <div className = "content-dark ">
                <div className="d-flex flex-column justify-content-center align-items-end h-100">
                    <h1 className = "title-dark"> { myTitle } </h1>
                    <h1 className = "subtitle-dark"> { mySubtitle }</h1>
                    <p className = "description-dark"> 
                        { myDescription}
                    </p>
                    <a className = "reglamento-dark" href="#">Reglamento</a>
                </div>
                <img className = "decoration-img" src = { myImg } alt="" srcset="" />
            </div>
            
        </div>

    )
}