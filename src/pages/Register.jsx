
import React, { useState } from 'react'
import registerImage from "../images/regis.png"
import { useNavigate } from "react-router-dom"

export const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });
    const navigate = useNavigate();
    //    handling the input value 
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        });
    }
    // handling the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const responce = await fetch(`http://localhost:3000/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            });

            if (responce.ok) {
                setUser(
                    {
                        username: "",
                        email: "",
                        phone: "",
                        password: ""
                    }
                )
                alert("User successfully registered")
                navigate("/login")
            }
            else {
                alert("Invalid Credentials")
            }
            console.log(responce);
        } catch (error) {
            console.log("register", error);
        }
    }
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white w-full md:w-full lg:w-full xl:w-full rounded-md overflow-hidden shadow-lg">
        <div className="w-full md:w-full">
          <img
            src={registerImage}
            alt="Registration"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-full flex justify-center md:w-full h-4/6">
          <div className="w-full bg-white border-2 border-gray-300 p-8 rounded-md shadow-md">
            <h2 className="text-3xl font-semibold mb-4 text-center text-blue-500">Sign Up</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                  value={user.username}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-600 text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                  value={user.phone}
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
                  className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    );
}
