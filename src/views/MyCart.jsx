import React, {useContext} from 'react';
import {useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
// style
import './allStyles.css';
// context
import { CartContext } from '../context/CartContext.jsx';


const MyCart = () => {
    const history = useNavigate();
    const {cart, removeItem, clearCart}=useContext(CartContext);

    /* suma total */
let totalTotal = 0;
cart.forEach(e => totalTotal += (e.price * e.cantidad));

  return (
    <div className='container'>
        <p onClick={() => history(-1)} className="goBack">
        <ArrowBackIcon/> Return
      </p>
        

    {cart.length ? <table className='cartList'>
        <thead border="0">
              <th>item</th>
              <th colspan="2">product</th>
              <th>cuantity</th>
              <th>price</th>
              <th></th>
            </thead>

        {
          cart.map((x, cantidad)=>{
            return(
            <tr key={x.id}>
              <td><img src={x.img} alt={x.tit} className/></td>
              <td colspan="2">{x.tit}</td>
              <td>x {x.cantidad}</td>
              <td>$ {x.cantidad * x.price}</td>
              <td><DeleteForeverIcon onClick={()=>{removeItem(x.id)}} className="clearIcon" /></td>
            </tr>
            )
          })
        }
        <tfoot>
          <td></td>
          <td colspan="2"></td>
          <td>total:</td>
          <td>$ {totalTotal}</td>
          <td><button onClick={() => {clearCart(cart)}} className="FillBtn"><RemoveShoppingCartIcon/></button></td>
        </tfoot>
        
        </table> 
        : <h3 className='anyChoose'>You haven't chosen any item yet.</h3> }

        
    </div>
  )
}

export default MyCart