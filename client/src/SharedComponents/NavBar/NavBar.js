import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../images/navbar-images/logo.png";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <nav className="header">
      <div className="nav_bar">
        <div className="nav_container">
          <img className="nav_logo" src={logo} alt="logo" />
          <ul className="list_items ">
            <NavItem page="home" />
            <NavItem page="students" />
            <NavItem page="cohorts">
              <DropDownMenu />
            </NavItem>
            <NavItem page="about" />
          </ul>
        </div>
      </div>
    </nav>
  );
}
function NavItem(props) {
  const [open, setopen] = useState(false);
  return (
    <li>
      <a
        rel="noopener noreferrer"
        href="#"
        className="nav_item"
        onMouseEnter={() => setopen(!open)}
        onMouseOut={() => setopen(open)}
      >
        {props.page}
      </a>
      {open && props.children}
    </li>
  );
}

const menuStyle = {
  padding: "10px ",
};

function DropDownMenu() {
  function DropDownItem(props) {
    return (
      <a rel="noopener noreferrer" href="#" className="menu_items">
        {props.children}
      </a>
    );
  }
  return (
    <div className="drop_down">
      <Link to="/cohorts" style={menuStyle}>
        <DropDownItem> Gaza </DropDownItem>
      </Link>
      <Link to="/cohorts">
        <DropDownItem> khalil</DropDownItem>
      </Link>
    </div>
  );
}
export default NavBar;
