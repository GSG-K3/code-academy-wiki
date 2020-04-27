import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../images/logo.svg";

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

function DropDownMenu() {
  function DropDownItem(props) {
    return (
      <a href="#" className="menu_items">
        {props.children}
      </a>
    );
  }
  return (
    <div className="drop_down">
      <DropDownItem> Gaza </DropDownItem>
      <DropDownItem> khalil</DropDownItem>
    </div>
  );
}
export default NavBar;
