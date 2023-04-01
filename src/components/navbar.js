import * as React from "react";
import "../styles/navbar.css";
import NavItem from './navItem';
import { navItems } from './navItems.js';

export default function Navbar() {
  return(
    <nav className="navbar">
      <ul className="navbar-nav">
        {navItems.map((nav) => {
          return (
            <NavItem items={nav}>{nav.title}</NavItem>
          );
        })}
      </ul>
    </nav>
  )
}
