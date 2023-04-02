import * as React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavLink({ to, children, ...props }) {
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
