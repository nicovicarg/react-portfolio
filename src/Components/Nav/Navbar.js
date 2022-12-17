import React from "react"
import ReactDOM from "react-dom"
import "./Navbar.css"
import About from "../About/About"
import Projects from "../Projects/Projects"
import Curriculum from "../Curriculum/Curriculum"
import Contact from "../Contact/Contact"

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.handleAbout = this.handleAbout.bind(this);
    this.handleProjects = this.handleProjects.bind(this);
    this.handleCurriculum = this.handleCurriculum.bind(this);
    this.handleContact = this.handleContact.bind(this)
  
  }
  handleAbout(){
    ReactDOM.render(<About/>, document.getElementById("container"))
  }
  handleProjects(){
    ReactDOM.render(<Projects/>, document.getElementById("container"))
  }
  handleCurriculum(){
    ReactDOM.render(<Curriculum/>, document.getElementById("container"))
  }
  handleContact(){
    ReactDOM.render(<Contact/>, document.getElementById("container"))
  }
  
  
  render(){
    return(
      
      <div id="nav-container">
        <nav id="navbar">
        <span id='span-navbar'>04:20</span>
        <ul>
        <li className='li' onClick={this.handleCurriculum}>Curriculum</li> 
        <li className='li' onClick={this.handleProjects}>Proyectos</li>
        <li className='li' onClick = {this.handleAbout}>Sobre mi</li>
        <li className='li' onClick={this.handleContact}>Contacto</li> 
      </ul>
      </nav>
      <hr/>
      </div>
    );
  }
}

export default Navbar;