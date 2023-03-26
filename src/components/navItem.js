import Dropdown from './dropdown';
import * as React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={match ? "active" : "inactive"}>
      <Link to={resolvedPath.pathname} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default function NavItem({ items }) {
  return (
    <>
      {items.subnav ? (
        <Dropdown items={items} />
      ) : (
        <CustomLink to={items.url}>{items.title}</CustomLink>
      )}
    </>
  );
};
