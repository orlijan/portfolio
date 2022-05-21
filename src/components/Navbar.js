import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <>
      <script src="../path/to/flowbite/dist/flowbite.js"></script>

          <nav className="flex  justify-between items-center h-16   relative shadow-sm font-light">
            <Link className="p-4 pl-8 active:text-indigo-600  hover:bounce" to="/portfolio">Leijan Legaspi</Link>
            <div className="pr-8 font-normal ">
            <button id="dropdownDefault" data-dropdown-toggle="dropdown" class=" font-light hover:underline underline-offset-8  px-4 py-2.5 text-center inline-flex items-center " type="button">Projects <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

<div id="dropdown" class="z-10 hidden bg-emerald-50 divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
      <li>
        {/* <a href="#" class="block px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a> */}
        <Link className="block px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-600 dark:hover:text-white" to="/about">About</Link>
      </li>
      <li>
      <Link className="block px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-600 dark:hover:text-white" to="/database">MTG database</Link>
      </li>
      <li>
        <a  class="block px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a  class="block px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>
            
            <Link className="navButton  " to="/about">About</Link>
            <Link className="navButton " to="/projects">Projects</Link>
            <Link className="navButton" to="/database">Database</Link>
            <Link className="navButton" to="/contact">Contact</Link>
            {/* <Link className="navButton" to="/bulletjournal">Bullet journal</Link> */}
            </div>
            </nav>
            
            </>
  );
};

export default Navbar;
