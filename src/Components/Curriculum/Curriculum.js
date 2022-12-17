import React from "react"
import "./Curriculum.css"
import img from "./js.png"
import html from "./html.png"
import css from "./css.jpg"
import sass from "./sass.png"
import icon from "./reac.jpg"
import redux from "./redux.png"
import profile from './fotomia.jpg'

class Curriculum extends React.Component {
  render(){
    return(
      <div id="curriculum-container">
        
        <div className="partes" id='parteuno'>
          <div id="header-card">
          <img src={profile} id='profile-pic'></img>
          <div>
            <h2>Vicente Dario Nicolas</h2>
            <h3>Front End Developer</h3>
          </div>
          </div>

          <div id="skills">
            <ul id="ul">
              <li>Soy el mejor en todo</li>
              <li>Trabajo 30 horas diarias</li>
              <li>No me aburro nunca</li>
              <li>Pago para poder trabajar</li>
              <li>Hablo 20 idiomas</li>
            </ul>
          </div>
          

          <div id="technologies">
            <img src={html} className="tech-icon"></img>
            <img src={css} className="tech-icon"></img>
            <img src={img} className="tech-icon"></img>
            <img src={sass} className="tech-icon"></img>
            <img src={icon} className="tech-icon"></img>
            <img src={redux} className="tech-icon"></img>
          </div>
        
          <p>Idiomas: Español/Ingles</p>
        </div>

        <div id="partes">
          <p>Diseño Web Responsable</p>
          <ul>
            <li>Bases de HTML5</li>
            <li>CSS Básico</li>
            <li>Diseño Visual Aplicado</li>
            <li>Accesibilidad Aplicada</li>
            <li>Principios de Diseño Web Responsable</li>
            <li>CSS Flexbox</li>
            <li>CSS Grid</li>
          </ul>
            <ul>
              <p>JS Algoritmos y Estructura De Datos</p>
              <li>JS Básico</li>
              <li>ES6</li>
              <li>Expresiones Regulares</li>
              <li>Debugging</li>
              <li>Estructura Básica de Datos</li>
              <li>Algoritmos básicos de Scripting</li>
              <li>POO</li>
              <li>Programación Funcional</li>
              <li>Algoritmos intermedios de Scripting</li>
            </ul>
            <ul>
              <p>Librerias de Desarrollo Front End</p>
              <li>Bootstrap</li>
              <li>jQuery</li>
              <li>SASS</li>
              <li>React</li>
              <li>Redux</li>
              <li>React and Redux</li>
            </ul>
        </div>
        <div className="partes" id="partetres">
          <p>Aca tipo como que iria todo lo que se hacer y las tareas que realizo dentro del desarrollo de las aplicaciones.</p>
          <p>Me encargo del maquetado, diseño y programación de las aplicaciones que se me ocurren o encuentro en challenges</p>
          <p>Por lo general me suelo demorar muchas horas debido a que utilizo mucho tiempo en investigar cosas basicas que me faltan pulir, pero no me detengo.</p>
          <p>Aca pongo un poquito mas de texto para rellenar y aprovechar a practicar con mi teclado mecanico nuevo</p>
          <button id="btn">Descargar CV</button>
        </div>

      </div>
    );
  }
}

export default Curriculum