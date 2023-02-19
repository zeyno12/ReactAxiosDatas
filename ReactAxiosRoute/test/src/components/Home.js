import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>
            <Link to="list">Products
            </Link>
        </li>
        <li>
            <Link to="login">Login
            </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
