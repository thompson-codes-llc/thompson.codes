import React from 'react';
import NavLink from "./navLink";
import '../styles/dropdown.css';


const Dropdown = ({ items }) => {
  return (
    <div class="dropdown-container">
      <NavLink to={items.url}>{items.title}</NavLink>
      <ul className="dropdown">
        {items.subnav.map((subnav, index) => (
          <li key={index} className="nav-items">
            <a href={subnav.url}>{subnav.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
