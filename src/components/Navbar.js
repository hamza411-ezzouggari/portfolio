import React from "react";
import { NavLink } from "react-router-dom";
import "./componants.css";
export default function Navbar() {
  return (
    <header className="bg-red-600">
      <div className="bg-red-605">
        <nav className="nav-element">
          <NavLink to="/" className="name-1">
            kapehe
          </NavLink>
          <NavLink to="/post" className="name-2">
            blog-Posts
          </NavLink>
          <NavLink to="/Project" className="name-3">
            Project
          </NavLink>
          <NavLink to="/About" className="name-4">
            About Me!
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
