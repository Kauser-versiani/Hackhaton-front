// Navbar.js
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
// import {logoImage} from '../images/logo.png'
// import { FaBars } from "react-icons/fa6";

export const Navbar = () => {


  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };



    return (
        <nav className="bg-blue-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
             {/* Right Side - Logo */}
             {/* <div>
              <img src={} alt="Logo" className="h-8 w-8" />
            </div> */}
            {/* Left Side - Menu Items */}
            <div className="flex items-center space-x-4">
        <NavLink to="/" className="text-white">Home</NavLink>
        <NavLink to="/about" className="text-white">About</NavLink>
        <NavLink to="/services" className="text-white">Services</NavLink>
        <NavLink to="/contact" className="text-white">Contact</NavLink>
        <NavLink to="/login" className="text-white">Login</NavLink>
        <NavLink to="/register" className="text-white">Signup</NavLink>
            </div>
    
           
          </div>
        </nav>

  );
};






