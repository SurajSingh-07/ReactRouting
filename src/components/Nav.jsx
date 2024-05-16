import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="w-[75%] mx-auto p-2 mt-5 uppercase flex items-center justify-center gap-7 font-semibold text-l bg-slate-300 ">
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "white" : "",
            fontWeight: e.isActive ? "bold" : "",
          };
        }}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-white" : "",
            e.isActive ? "font-bold" : "",
          ].join(" ");
        }}
        to="/user"
      >
        User
      </NavLink>
      
      <NavLink to="/about">
        {(e) => {
          return <span className={[
            e.isActive ? "text-white" : "",
            e.isActive ? "font-bold" : "",
          ].join(" ")}>About</span>;
        }}
      </NavLink>
    </nav>
  );
}

export default Nav;
