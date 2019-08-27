import React from 'react'
import Logo from '../img/logo.png'
import {NavLink} from 'react-router-dom'
const Navbar = () => {

    return(
      <div id="nv">
                <div className="navbar container ">
        
        <nav className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand" href="#"><img src={Logo}/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/About">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Menu">Menu</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Chef">Chef</NavLink>
      </li>

      {/* <li className="nav-item dropdown">
        <a className="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Blog
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Blog Single</a>
          <a className="dropdown-item" href="#">Blog Details</a>
        </div>
      </li> */}
      <li className="nav-item">
        <NavLink className="nav-link" to="/Contact">Contact</NavLink>
      </li>


    </ul>
  </div>
</nav>

        </div>

      </div>
    )
}
export default Navbar