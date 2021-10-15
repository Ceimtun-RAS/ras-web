import { useEffect, useState } from 'react'; 
import "./menu.sass";
import Logo from './../../assets/logo/RAS.png'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  
export const Menu = () => {
    return (
        <>
            <div className="logo">
                <img id = "rasLogo"   src= { Logo } alt="unrobot-logo" />
            </div>
            <ul className = "navbar nav">
                <li><a href="/">Inicio</a></li>
                <li><a href="#">Sobre Nosotros</a></li>
                <li><a href="#">Eventos</a></li>
                <li><a href="#">Actividades</a></li>
                { /*<li><a href="#">Proyectos</a></li> */ }
                <li><a href="/unrobot">UN Robot</a></li>
                <li><a href="#">Contáctanos</a></li>
            </ul>
            <div className = "language">
                <div> ES | EN </div>
            </div>
        </>
    )
};