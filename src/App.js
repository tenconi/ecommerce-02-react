import "./App.css";
import NavBar from "../src/components/NavBar/NavBar.jsx";
//react router dom
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import Home from "./views/Home.jsx";
import ItemDetail from "./views/ItemDetail.jsx";
import Error404 from "./views/Error404.jsx";
import MyCart from "./views/MyCart";
//context
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Browser>

        <div className="App">
          <NavBar />
        </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Error404 />} />
            <Route path='/detail/:id' element={<ItemDetail/>}/>
            <Route path='/cart' element={<MyCart />} />
          </Routes>

        
      </Browser>
    </CartProvider>
  );
}

export default App;
