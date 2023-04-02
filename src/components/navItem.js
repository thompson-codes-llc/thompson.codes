import Dropdown from './dropdown';
import * as React from "react";
import NavLink from "./navLink";

export default function NavItem({ items }) {
  return (
    <>
      {items.subnav ? (
        <Dropdown items={items} />
      ) : (
        <NavLink to={items.url}>{items.title}</NavLink>
      )}
    </>
  );
};
