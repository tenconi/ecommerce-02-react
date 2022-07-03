import React, { useContext } from "react";
// component
import ItemCounter from "../components/ItemCounter/ItemCounter.jsx";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//css
import "./allStyles.css";
// el dinamismo del link
import { useParams, useNavigate } from "react-router-dom";
// contexto
import { CartContext } from "../context/CartContext.jsx";

const ItemDetail = () => {
  const status = useContext(CartContext);
  const itemProd = status.items;

  const { id } = useParams();

  let selectedItem = itemProd.filter((x) => x.id === id);
  //console.log(selectedItem);

  //console.log(status.items)

  const history = useNavigate();

  return (
    <div className="container">
      <p onClick={() => history(-1)} className="goBack">
        <ArrowBackIcon/> Return
      </p>
      <div className="contItem">
        {selectedItem.map((item) => {
          return (
            <div className="itemGrid" key={item.id}>
              <img src={item.img} alt="{item.tit}" />

              <div>
                <h3 className="itemGrid__tit">{item.tit}</h3>
                <p className="itemGrid__desc">{item.desc}</p>
                <p>stock: {item.stock} u</p>
                <h4 className="itemGrid__price">$ {item.price}</h4>
              </div>

              <div className="itemContador">
                <ItemCounter stock={item.stock} item={item} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemDetail;
