import React, { Component } from 'react';
import './NavBar.css';
import logo from '../../images/navbar-images/logo.png';
class NavBar extends Component {
  state = {
    openMenu: false,
  };

  showMenu = (e) => {
    this.setState({ openMenu: true });
    console.log(this.state.openMenu, 'hello now it works');
  };

  hideMenu = (e) => {
    this.setState({ openMenu: false });
  };
  render() {
    return (
      <nav className='header'>
        <div className='nav_bar'>
          <div className='nav_container'>
            <img className='nav_logo' src={logo} alt='logo' />
            <ul className='list_items '>
              <li>
                <a rel='' href='#' className='nav_item'>
                  home
                </a>
              </li>
              <li>
                <a rel='' href='#' className='nav_item'>
                  students
                </a>
              </li>
              <li
                page='cohorts'
                onMouseOver={(e) => {
                  this.showMenu(e);
                }}
                onMouseOut={(e) => {
                  this.hideMenu(e);
                }}
              >
                {this.state.openMenu ? (
                  <ul className='drop_down'>
                    <li className='menu_items'>
                      <a rel='' href='#' className='menu_items'>
                        khalel
                      </a>
                    </li>
                    <li className='menu_items'>
                      <a rel='' href='#' className='menu_items'>
                        Gaza
                      </a>
                    </li>
                  </ul>
                ) : (
                  console.log(this.state.openMenu, 'hello its heddin')
                )}
                >
                <a rel='' href='#' className='nav_item'>
                  cohorts
                </a>
              </li>
              <li>
                <a rel='' href='#' className='nav_item'>
                  about
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
