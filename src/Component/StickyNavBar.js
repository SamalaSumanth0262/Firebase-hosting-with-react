import React from 'react';


class StickyNavBar extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="form-control" style={{border:"2px solid white",backgroundColor:"#fed136"}}>
        <div className="row">
          <div className="col-md-12">
            <div className="promotion-banner">
              <span className="promotion-banner-text">
              Upload a Menu of a restaurant and get paid 50/-
              </span>
            </div>
          </div>
        </div>

      </div>
    );
  }
}



export default StickyNavBar;