import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      
          <nav className="flex  justify-between items-center h-16  text-black relative shadow-sm font-light">
            <Link className="p-4 pl-8 active:text-indigo-600  hover:" to="/">Magic the Gathering Organizer</Link>
            <div className="pr-8 font-normal">
            <Link className="p-4 active:text-indigo-600 hover:underline" to="/about">About</Link>
            <Link className="p-4 active:text-indigo-600 hover:underline" to="/create">Create</Link>
            <Link className="p-4 active:text-indigo-600 hover:underline" to="/database">Database</Link>
            </div>
            </nav>
            
            
  );
};

export default Navbar;
