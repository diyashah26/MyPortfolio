import React from 'react'
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <header>
      <nav className="text-white shadow-md px-10 m-5">
        <ul className="p-4 ml-20 mr-20 flex justify-between items-center">
          <li>
            <NavLink to="/"> Home </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/about"> About </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/contact"> Contact </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/feedback"> Feedback </NavLink>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar
