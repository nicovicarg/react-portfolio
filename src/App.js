import React from "react"
import './App.css';
import Footer from './Components/Footer/Footer'
import Navbar from "./Components/Nav/Navbar";
import Projects from "./Components/Projects/Projects"


/*Componente App*/

class App extends React.Component{
  
  render(){
    return (
      <div id="principal">
         <Navbar />
         <div id='container'>
          <Projects />
         </div>
         <Footer />
      </div>
    );
  }
}



export default App
