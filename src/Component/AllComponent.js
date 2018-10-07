import React from 'react'
import NavBar from "./NavBar";
import ParticleContainer from './ParticleContainer'
import TableSection from "./TableSection";
import { StickyContainer, Sticky } from "react-sticky";
import StickyNavBar from "./StickyNavBar";
class AllComponent extends React.Component{

  render(){
    return(
      <div>
        <StickyContainer>
          <NavBar/>
          <Sticky topOffset={100}>
            {({style}) => (
              <header style={style}>
                <StickyNavBar />
              </header>
            )}
          </Sticky>
          <ParticleContainer/>
          <TableSection/>
        </StickyContainer>
      </div>
    );
  }}
export default AllComponent;
