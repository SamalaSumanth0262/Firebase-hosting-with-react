import React from 'react';
import '../styles/custom-style.css'
class NavBar extends React.Component{
  render(){
    return(
      <div className="navbar-background">
          <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand allmeno-color"  href="#">AllMeno</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{color:"#fed136"}}>
              <span className="navbar-toggler-icon" style={{color:"#fed136"}}></span>
            </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link allmeno-color" href="#">Hotels Around Me</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link allmeno-color" href="#">Search Dishes</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link allmeno-color" href="#">FeedBack</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link allmeno-color" href="#">Improve Us</a>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-warning allmeno-color" type="submit">Search</button>
                </form>
            </div>
          </nav>
      </div>
    );
  }
}
export default NavBar;