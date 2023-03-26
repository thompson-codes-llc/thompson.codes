import React from 'react';
import { Link } from "react-router-dom";
import { CustomLink } from './navItem';
import '../styles/dropdown.css';


const Dropdown = ({ items }) => {
  return (
    <div class="dropdown-container">
      <CustomLink to={items.url}>{items.title}</CustomLink>
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
