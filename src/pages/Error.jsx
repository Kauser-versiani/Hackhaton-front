import { NavLink } from "react-router-dom";
export const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page not found</p>
        <NavLink to="/" className="text-blue-500 underline hover:text-blue-700">
          Go back to home
        </NavLink>
      </div>
    </div>
  );
};
