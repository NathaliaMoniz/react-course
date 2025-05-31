import React from "react";
import Contents from "./Contents";
import { useNavigate } from "react-router-dom";

const About = () => {

  const navegar = useNavigate();
  const manejarNavegacion = () => {
    navegar('/')
  }
  return (
    <div>
      <h1>About</h1>
        <p>This is the about page of our application.</p>
        <Contents/>
        <Contents/>
        <Contents/>

        <button className='btn btn-primary'onClick={manejarNavegacion}>
          Ir a Home
        </button>
    </div>
  );    
}
export default About;