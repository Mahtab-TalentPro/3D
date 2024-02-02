import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-slate-300 text-white p-4">
      <NavLink to={"/"} className="mr-4" activeClassName="underline">
        Home
      </NavLink>
      <nav className="mr-4" activeClassName="underline">
        <NavLink to={"/about"} className="mr-4" activeClassName="underline">
          About
        </NavLink>
        <NavLink to={"/contact"} className="mr-4" activeClassName="underline">
          Contact
        </NavLink>
        <NavLink to={"/projects"} activeClassName="underline">
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
