import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div>
    
    <nav>   
    <h2>Logo</h2>
    <ul className="nav-links">
      <Link to='/' className="link-style"> <li>Home</li></Link> 
      <Link to='/main' className="link-style"> <li>Main</li></Link> 
      <Link to='/about' className="link-style"> <li>About</li></Link> 
       
    </ul>
    </nav> 
      
    </div>
  );
}

export default Nav;