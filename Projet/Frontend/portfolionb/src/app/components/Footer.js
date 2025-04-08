import React from "react";
import './Footer.css'


function Footer() {
  return (
    <footer className="foot lg:bottom-0 lg:left-0 lg:z-20 w-full p-4 bg-white border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2025{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Noah Brosseau
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
        <i className="fa fa-github"></i>
          <a href="https://github.com/noahbros" className="hover:underline me-4 md:me-6">
            GitHub : noahbros
          </a>
        </li>
        <li>
        <i className="fa fa-github"></i>
          <a href="https://github.com/NoahBro2003" className="hover:underline me-4 md:me-6">
            GitHub : NoahBro2003
          </a>
        </li> 
        <li>
        <i className="fa fa-linkedin-square"></i>
          <a href="https://www.linkedin.com/in/noah-brosseau-57537335b/" className="hover:underline me-4 md:me-6">
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
