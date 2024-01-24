import React, { useState } from 'react';
import loginImage from "../images/login.avif";
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom"


export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here
    try {
      const responce = await fetch(`http://localhost:3000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      });

      if (responce.ok) {
        alert("login Successful");
        setUser(
          {
            email: "",
            password: ""
          }
        )
        navigate("/");
      }
      else{
        alert("Invalid Credentials")
      }
      console.log(responce);

    } catch (error) {
      console.log("login" , error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
  <div className="flex flex-col md:flex-row bg-white w-11/12 md:w-full lg:w-3/5 xl:w- rounded-md overflow-hidden shadow-lg">
    <div className="w-full md:w-full bg-gray-100">
      <img
        src={loginImage}
        alt="Login"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
    <div className="w-full md:w-full p-8">
      <h2 className="text-4xl font-extrabold mb-6 text-blue-600">Log in to Your Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 bg-gray-200 text-gray-800 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
            value={user.email}
            onChange={handleInput}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-3 bg-gray-200 text-gray-800 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
            value={user.password}
            onChange={handleInput}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Log In
        </button>
      </form>
      <p className="text-sm mt-4 text-gray-800">
        Don't have an account? <NavLink to="/register" className="text-blue-500">Sign up here</NavLink>.
      </p>
      
    </div>
  </div>
</div>


  );
}