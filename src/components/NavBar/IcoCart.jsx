import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Nav.css";
// context
import { CartContext } from "../../context/CartContext.jsx";

const IcoCart = () => {
  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

  let canTotal = 0;
  cart.forEach((e) => (canTotal += e.cantidad));

  return (
    <div>
      <Link to={'/cart'}>
        <AddShoppingCartIcon className="icoCart" />
        <span className="nofification">{canTotal}</span>
        {/* {cart.length ? <span className="nofification">{canTotal}</span> : null} */}
      </Link>
    </div>
  );
};

export default IcoCart;
