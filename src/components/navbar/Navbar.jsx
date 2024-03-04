import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-white mr-4">
            Home
          </Link>
          <Link to="/game" className="text-white">
            Game
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
