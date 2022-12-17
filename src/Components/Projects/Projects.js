import React from "react";
import "./Projects.css";

class Projects extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      current: 0,
      proyects: [
        {
          photo: "Foto 1",
          title : "Proyecto 1",
          subtitle: "Subtitle 1",
          description : [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`, `Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`, `Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`, `Where can I get some?
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`]
        },
        {
          photo: "Foto 2",
          title : "Proyecto 2",
          subtitle: "Subtitle 2",
          description : [`Where can I get some?
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`, `Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`, `Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`, `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`]
        },
        {
          photo: "Foto 3",
          title : "Proyecto 3",
          subtitle: "Subtitle 3",
          description : [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`, `Where can I get some?
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`, `Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`, `Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`]
        },
        {
          photo: "Foto 4",
          title : "Proyecto 4",
          subtitle: "Subtitle 4",
          description : [`Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`, `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`, `Where can I get some?
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`, `Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`]
        }
      ]
    }
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.showDescription = this.showDescription(this);
  }
  increase(){
    this.setState({
      current: this.state.current + 1
    })
  };
  decrease(){
    this.setState({
      current: this.state.current - 1
    })
  }
  showDescription(){
    this.state.proyects[this.state.current].description.map(element=>{
      return (<p>{element}</p>)
    })
  }
  
  
  render(){
    return(
      <div id="container-containerXD">
        <div id="pro-container">
        <span onClick={this.decrease}>&lt;</span>
        <div id="foto-proyecto">{this.state.proyects[this.state.current].photo}</div>
        <div id="info-proyecto">
          <h3>{this.state.proyects[this.state.current].title}</h3>
          <h4>{this.state.proyects[this.state.current].subtitle}</h4>
          <div id="description">
            {this.state.proyects[this.state.current].description.map(element=>{
      return (<p>{element}</p>)
    })}
          </div>
          
        </div>
        <span onClick={this.increase}>&gt;</span>
      </div>
      <div id="contenedor-cajitas">
        {this.state.proyects.map(element => {
          return (<div id="cajita"></div>)
        })}
      </div>
      </div>
      
    );
  }
}


export default Projects
