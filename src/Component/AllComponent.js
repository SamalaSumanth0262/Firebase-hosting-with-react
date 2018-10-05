import React from 'react'
import NavBar from "./NavBar";
import ParticleContainer from './ParticleContainer'
import SearchBar from "./SearchBar";

class AllComponent extends React.Component{
  render(){
    return(
      <div>
        <NavBar/>
        <ParticleContainer/>
        <SearchBar/>
      </div>
    );
  }
}
export default AllComponent;