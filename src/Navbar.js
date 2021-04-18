import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <header className="bg-red-600">
      <div className="bg-red-605">
        <nav className="nav-element">
          <NavLink to="/" className="name">
            kapehe
          </NavLink>
          <NavLink to="/post" className="name">
            blog-Posts
          </NavLink>
          <NavLink to="/Project" className="name">
            Project
          </NavLink>
          <NavLink to="/About" className="name">
            About Me!
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
