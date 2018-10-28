import React from 'react'
import NavBar from "./NavBar";
import ParticleContainer from './ParticleContainer'
import TableSection from "./TableSection";
import { StickyContainer, Sticky } from "react-sticky";
import StickyNavBar from "./StickyNavBar";
import Page from 'react-page-loading'

class AllComponent extends React.Component{

  render(){
    return(
      <div style={{fontFamily:"\"Source Code Pro\", Monaco, monospace"}}>
      <Page loader={"bubble-spin"} color={"#fed136"} size={50} duration={1}>
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
      </Page>
      </div>
    );
  }}
export default AllComponent;
