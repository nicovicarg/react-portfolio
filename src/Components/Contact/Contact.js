import React from "react"
import "./Contact.css"

class Contact extends React.Component {
  render(){
    return (
      <div id='contact-container'>
        <div id='redes'>
          <div className="redes">GitHub</div>
          <div className="redes">LinkedIn</div>
          <div className="redes">Facebook</div>
          <div className="redes">Instagram</div>
        </div>
        <form id='form'>
          <label>
          Correo
          <input className="form-inputs"/>
          </label>
          <label>
            Asunto
          <input className="form-inputs"></input>
          </label>
          <label>
          Mensaje
          <textarea className="form-inputs" id="text-area"></textarea>
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact