import { faGears, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


export default function Header() {

  let notify = () => {
    toast.error("This is under process !");
  }

  return (
    <div>
      <nav class="bg-white py-2 px-10 md:py-4">
        <div class="container px-4 mx-auto md:flex md:items-center">
          <div class="flex justify-between items-center">
            <a href="#" class="font-bold text-xl text-indigo-600">
              FWR
            </a>
            <button
              class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
            >
              <i class="fas fa-bars"></i>
            </button>
          </div>
          <div
            class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            <a class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
              <Link to={"/"}>Home</Link>
            </a>
            <Link
            to={"/about-us"}
             
              class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
               About
              </Link>
            <a
              href="#"
              class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              <ToastContainer />
              <button onClick={notify}>Login</button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
