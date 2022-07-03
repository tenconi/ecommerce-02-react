import React, { useState, useContext } from "react";
import FillBtn from "../Buttons/FillBtn.jsx";
// react router dom
import { Link } from "react-router-dom";
// context
import { CartContext } from "../../context/CartContext";
//css
import "./ItemCounter.css";
//import ItemDetail from "../../views/ItemDetail";

const ItemCounter = ({ item, onAdd }) => {

  const { addItem } = useContext(CartContext);
  const [counter, setCounter] = useState(0);

  const handelIncrement = () => {
    if (((counter) => 0) && counter < item.stock) {
      setCounter(counter + 1);
    }
  };

  const handelDecrement = () => {
    if (counter > 0 && counter <= item.stock) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="itemContainer">
      <p className="legend">Items selected:</p>
      <p className="counter">{counter}</p>
      <div className="btnCount__section">
        <button className="btnCount" onClick={handelDecrement}>-</button>

        <button className="btnCount" onClick={handelIncrement}>+</button>
      </div>
      
      <p className="itemNotif">
        You have selected <strong>{counter}</strong> items of:{" "}
        <strong>{item.tit}</strong>.<br />
        <strong><em>Total: $ {counter * item.price}</em></strong>
      </p>

      <div className="portaMainBtn">
        <button onClick={()=>{addItem(item, counter)}} className='LineBtn'> + add</button>

        <Link to='/cart' className="linkBtn">
          <FillBtn nameTag={"finish"}/>
        </Link>
      </div>
    </div>
  );
};

export default ItemCounter;
