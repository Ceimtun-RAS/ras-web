import { useState } from "react"; 
import "./category.sass"
import { Button } from 'react-bootstrap'
import Velocista from 'assets/img/velocista.png';
import { getDefaultNormalizer } from "@testing-library/dom";


import  MathWorks  from 'assets/img/mathworks.png';

export const Category = ( {title, subtitle, description, img, ft}) => {
    const [myTitle, setTitle]  = useState(title)
    const [mySubtitle, setSubtitle]  = useState(subtitle)
    const [myDescription, setDescription]  = useState("Diseña el robot más veloz y completa la pista en el menor tiempo posible")
    const [myImg, setImg]  = useState( img || Velocista)
    const [myFt, setFt] = useState(ft)

    /* Function */

    const getDefaultFeature = (img) => {
        return (
            <div className = "feature-div">
                <p> ft. </p> 
                  <img className = "feature-sponsor" src = { img } ></img> 
            </div>
        )
    }

    return (
        <div className = "category-div">
            <div className = "img-div  d-flex flex-column  justify-content-center align-items-center">
                <img src = { myImg }></img>
            </div>
            <div className = "content d-flex flex-column  justify-content-center align-items-start">
                <h1 className = "title"> { myTitle } </h1>
                <h1 className = "subtitle"> { mySubtitle }</h1>
                { myFt && getDefaultFeature(myFt)}
                <p className = "description"> 
                 { myDescription }
                </p>
                <a className = "reglamento" href="#">Reglamento</a>
                
            </div>
            
        </div>

    )
}