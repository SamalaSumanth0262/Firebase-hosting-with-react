import React from 'react';
import NavBar from './NavBar';
import UploadFile from "./UploadFile";
class AddMenu extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="addmenu" style={{height:"1000px"}}>
        <NavBar/>
        <UploadFile/>
      </div>
    );
  }
}
export default AddMenu;