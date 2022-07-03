import React, { useContext } from "react";
//react router dome
import { Link } from "react-router-dom";
import IcoCart from "./IcoCart.jsx";
import "./Nav.css";

const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <Link to="/" className="linkBrand">
          <h1>☺ BrandHere</h1>
        </Link>
        <div className="portaIcos">

        <IcoCart />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
