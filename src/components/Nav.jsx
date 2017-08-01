import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component{

    render() {
      return (
        <header className='header'>
          <nav className="menu">
            <ul className="menu__ul">
              <li className="menu__li">
                <Link className="menu__a" to="/">Home</Link>
              </li>
              <li className="menu__li">
                <Link className="menu__a" to="/examples">Examples</Link>
              </li>
              <li className="menu__li">
                <a href="#" className="menu__a">FAQ </a>
              </li>
            </ul>
          </nav>
        </header>
      );
    }
}


module.exports=Nav;
