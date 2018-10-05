import React from 'react';
import Particles from "react-particles-js";
import '../styles/custom-style.css';
class ParticleContainer extends React.Component{
  render(){
    return(
      <div className="container-fluid" id="particles-js">
        <Particles params={{
            particles: {
              line_linked: {
                color: "fed136",
                opacity: 0,
                width: 1
              },
              number: {
                value: 100,
                density: {
                  enable: true
                }
              },
              move: {
                speed: 10
              },
              shape:{
                type:"circle",
                stroke: {
                  width: 4,
                  color: "#fed136"
                }
              },
              color: {
                value: "#000000"
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "grab"
                },
                onclick: {
                  enable: true,
                  mode: "repulse"
                },
                resize: true
              },
              modes: {
                repulse: {
                  distance: 400
                },
                grab: {
                  distance: 300,
                  line_linked: {
                    opacity: 1
                  }
                },
              }
            },
            retina_detect: true
          }}/>
        </div>
    );
  }
}
export default ParticleContainer;