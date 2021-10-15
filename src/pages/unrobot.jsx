import { Menu } from "components/Landing/menu";
import "./unrobot.sass"; 
import UNRobotImg from "assets/img/unrobot.png"
import Owl from "assets/img/owl.png"
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import Vistronica from 'assets/img/vistronica.png'
import MathWorks from 'assets/img/mathworks.png'
import Skulltrap from 'assets/img/skulltrap.png'
import PhoenixContact from 'assets/img/phoenixContact.png'
import { Category } from "components/UNRobot/category";
import { CategoryDark } from "components/UNRobot/categoryDark";

// images 
import Velocista from 'assets/img/velocista.png';
import Simulation from 'assets/img/simulation.png';
import Drone from 'assets/img/drone.png';


export const UNRobot = () => {
    return (
        <>
        <div className = "unrobot-div">
            <div className = "grid-wrapper">
            <Menu/>
            <div className = "content">

                <div className = "title-content d-flex flex-column">
                    <img className = "UNRobot-img" src= { UNRobotImg} alt="UN Robot Logotipo" srcset="" />
                    <h1>Categorías</h1>
                    <span>></span>
                </div>

                <img className = "owl" src= { Owl } alt= "Buho Robótico de RAS UN" srcset="" />
            </div>
            </div>
        </div>

        { /* Info */ }

        <section className = "sponsors">
            
                <h1 class = "sponsors-title">Patrocinadores</h1>
            
            <Row className = "sponsors-div">
                <Col><img src= { MathWorks } alt="" srcset="" /></Col>
                <Col><img src= { Vistronica } alt="" srcset="" /></Col>
                <Col><img src= { PhoenixContact } alt="" srcset="" /></Col>
                <Col><img src= { Skulltrap } alt="" srcset="" /></Col>
                
            </Row>
        </section>

        { /* Categorías */}

        <section className = "full">
            <Category 
                title = "Seguidor" 
                subtitle = "de Linea" 
                img = { Velocista }/>
            <CategoryDark 
                title = "Simulation" 
                subtitle = "CHALLENGE"
                description = "Puedes participar en las subcategorías Junior, Intermedio o Profesional y demostrar tus habilidades de programación"
                img = { Simulation } />

            <Category 
                title = "Drone" 
                subtitle = "Racing"
                description = "Utilizando el simulador LiftOff, demuestra tus habilidades de vuelo en esta gran carrera simulada"
                img = { Drone } />
        </section>
    </>
    )
}