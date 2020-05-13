import React, { Component } from 'react';
import './NavBar.css';
import logo from '../../images/navbar-images/logo.png';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  state = {
    openMenu: false,
  };

  showMenu = (e) => {
    this.setState({ openMenu: true });
  };

  hideMenu = (e) => {
    this.setState({ openMenu: false });
  };
  render() {
    return (
      <nav className='header'>
        <div className='nav_bar'>
          <div className='nav_container'>
          <Link to = '/'>
            <img className='nav_logo' src={logo} alt='logo' />
          </Link>
            <ul className='list_items '>
              <Link to='/' className = 'nav_item'>
                <li className = 'nav_item'>home</li>
              </Link>

              <Link to='/students' className = 'nav_item'>
                <li className = 'nav_item'>
                  <a rel='' href='#' className='nav_item'>
                    students
                  </a>
                </li>
              </Link>
              <li
                className = 'nav_item'
                page='cohorts'
                onMouseEnter={(e) => {
                  this.showMenu(e);
                }}
                onMouseLeave={(e) => {
                  this.hideMenu(e);
                }}
              >
                {this.state.openMenu ? (
                  <ul className='drop_down'>
                    <Link to='/cohorts/khalel' className = 'nav_item'>
                      <li
                        className='menu_items'
                        onClick='window.location.reload()'
                      >
                        khalel
                      </li>
                    </Link>
                    <Link to='/cohorts/gaza' className = 'nav_item'>
                      <li 
                      className='menu_items'
                      onClick='window.location.reload()'
                      >gaza</li>
                    </Link>
                  </ul>
                ) : (null)}
                cohorts
              </li>
              <Link to='/About' className = 'nav_item'>
                <li className = 'nav_item'>about</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
