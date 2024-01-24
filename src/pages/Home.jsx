
import React from 'react';
import projectImage from '../images/project sharing.png'
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="flex">
      {/* Left side with text */}
      {/* Right side with image */}
      <div className="w-1/2">
        <img
          src={projectImage} // Replace with your image URL
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 p-8">
        <h1 className="text-4xl font-bold mb-4">Project Sharing</h1>
        <p className="text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
       <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"><NavLink to="/register" >Register</NavLink>
          
        </button>
      </div>

      


    </div>
  );
};

