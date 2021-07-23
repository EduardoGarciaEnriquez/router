//UI supercharged component 
import React from 'react';
import { Link, withRouter} from 'react-router-dom';
const Navbar = (/*props*/) =>{
  //Auto redirect the web page to contact after 2s
  // setTimeout(() => {
  //   props.history.push('/contact.js')
  // }, 2000);
  return(
    <nav className="nav-wrapper red darken-3 expand">
        <div className="container">
          <a href="#" className="brand-logo">Ninjas.com</a>
          <ul className="right">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
  )
}

//export default Navbar;
//supercharge the navbar component
export default withRouter(Navbar);