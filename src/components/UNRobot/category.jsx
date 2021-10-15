import { useState } from "react"; 
import "./category.sass"
import { Button } from 'react-bootstrap'
import Velocista from 'assets/img/velocista.png';
export const Category = ( {title, subtitle, description, img}) => {
    const [myTitle, setTitle]  = useState(title)
    const [mySubtitle, setSubtitle]  = useState(subtitle)
    const [myDescription, setDescription]  = useState("Diseña el robot más veloz y completa la pista en el menor tiempo posible")
    const [myImg, setImg]  = useState( img || Velocista)

    return (
        <div className = "category-div">
            <div className = "img-div  d-flex flex-column  justify-content-center align-items-end">
                <img src = { myImg }></img>
            </div>
            <div className = "content d-flex flex-column  justify-content-center align-items-start">
                <h1 className = "title"> { myTitle } </h1>
                <h1 className = "subtitle"> { mySubtitle }</h1>
                <p className = "description"> 
                 { myDescription }
                </p>
                <a className = "reglamento" href="#">Reglamento</a>
                
            </div>
            
        </div>

    )
}