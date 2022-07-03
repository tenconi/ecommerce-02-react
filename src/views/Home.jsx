import React, { useContext } from "react";
import "./allStyles.css";
import ItemCard from "../components/ItemCard/ItemCard.jsx";
import { CartContext } from "../context/CartContext.jsx";

const Home = () => {
  const contexto = useContext(CartContext);
  const { items } = contexto;

  //console.log(items)

  return (
    <div className="container">
      <div className="intro">
        <h2>Home</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here'
        </p>
      </div>

      <div className="showProducts">
        {items.map((items) => {
          return <ItemCard key={items.id} items={items} />;
        })}
      </div>
    </div>
  );
};

export default Home;
