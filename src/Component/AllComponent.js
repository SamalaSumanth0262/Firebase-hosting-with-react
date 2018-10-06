import React from 'react'
import NavBar from "./NavBar";
import ParticleContainer from './ParticleContainer'
import TableSection from "./TableSection";
class AllComponent extends React.Component{
  render(){
    return(
      <div>
        <NavBar/>
        <ParticleContainer/>
        <TableSection/>
      </div>
    );
  }
}
export default AllComponent;