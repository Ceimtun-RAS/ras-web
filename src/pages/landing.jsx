import { useState } from 'react'
import './landing.sass'
import { Menu } from '../components/Landing/menu'

import Facebook from 'assets/logo/facebook.png'
import Instagram from 'assets/logo/instagram.png'
import Linkedin from 'assets/logo/linkedin.png'
import Twitter from 'assets/logo/twitter.png'
import youtube from 'assets/logo/youtube.png'

import Robot from 'assets/img/robot-main.png'
export const Landing = () => {
    return (
        <div class = "landing-div">
            <div class = "grid-wrapper">
               <Menu/> 
                <div class = "title">
                    <h1> Ceimtun-RAS </h1>
                    <h3> Robótica y Automatización </h3>
                    <button id = "learnMoreButton" className = "transition-short"> Ver más </button>

                    <span className = "diag-decorator"></span>
                    <img id = "robotMain" src = {Robot} ></img>
                </div>
                <div className="landing"></div>
                <div className="social"> 
                    <a href = "https://twitter.com/CEIMTUN" target = "_blank"><img src = {Twitter} alt  = "facebook icon"/> </a> 
                    <a href = "https://twitter.com/CEIMTUN" target = "_blank"><img src = {Linkedin} alt  = "facebook icon"/> </a> 
                    <a href = "https://www.youtube.com/channel/UCeTZBxrApbe3yn7-R8ovALA" target = "_blank"><img src = {youtube} alt  = "facebook icon"/> </a> 
                    <a href = "https://www.instagram.com/ceimtun/" target = "_blank"><img src = {Instagram} alt  = "facebook icon"/> </a> 
                    <a href = "https://www.facebook.com/RAS.UNAL" target = "_blank"><img src = {Facebook} alt  = "facebook icon"/> </a> 

                    

                    <div id ="decoration"></div>
                    
                    
                </div>
            </div>
        </div>
    )
}