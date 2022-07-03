// 1- importo createContext
import React, { createContext, useState } from "react";

// 2- Creo contexto y lo exporto
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  const [items, setItems] = useState([
    {
      id: "001",
      cat: "techno",
      tit: 'TV 42" FullHD',
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s.",
      img:
        "https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_1100,f_auto,q_auto/https://s3-eu-west-1.amazonaws.com/accounts-media/SHRP/DAM/origin/2812d8e2-6a9d-11ea-9e59-8a541dae4315.jpg",
      price: 1500,
      stock: 8,
    },

    {
      id: "002",
      cat: "techno",
      tit: "Samsung A13",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s.",
      img:
        "http://medias.musimundo.com/medias/00543007-146077-146077-01-146077-01.jpg-size300?context=bWFzdGVyfGltYWdlc3w0MDk2OXxpbWFnZS9qcGVnfGg1Zi9oOGIvMTAzOTA2NTE3OTc1MzQvMDA1NDMwMDctMTQ2MDc3LTE0NjA3N18wMS0xNDYwNzdfMDEuanBnX3NpemUzMDB8YzNlODE4MzRmY2Q4YWUzOTczOGYzOGRjMjdiZmIzM2Q0NzUwN2MzOGQyZTAyNjdkY2I5MjJkNjY2M2Q3ZjRlNQ",
      price: 2000,
      stock: 6,
    },

    {
      id: "003",
      cat: "electro",
      tit: "Pava Philips",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s.",
      img:
        "https://www.garciayolivero.com.ar/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/1/21727-pavaphilipshd930693a01.jpg",
      price: 400,
      stock: 12,
    },

    {
      id: "004",
      cat: "electro",
      tit: "Tostadora ATMA",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s.",
      img:
        "https://images.fravega.com/f300/c88ca0393f73f4472ed67e06e191ed02.jpg.webp",
      price: 350,
      stock: 10,
    },

    {
      id: "005",
      cat: "cocina",
      tit: "Cocina Florencia",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s.",
      img:
        "https://www.casasilvia.com/media/catalog/product/cache/5be8613c49569c873a50ed7e321cb477/c/o/cocina-electrica-flor-8638e-hconveccion.jpg",
      price: 800,
      stock: 4,
    },

    {
      id: "006",
      cat: "cocina",
      tit: "Heladera Electrolux",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s.",
      img:
        "https://www.tibo.bo/tiendasbolivia/wp-content/uploads/2020/07/electrolux-refrigerador-dm90x-puerta-francesa.jpg",
      price: 1600,
      stock: 3,
    },
  ]);

  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    const product = { ...item, cantidad }
    const compareItem = cart.find((prod) => prod.id === item.id)
    if (cantidad !== 0) {
      if (compareItem) {
        const consulta = window.confirm(
          "⛔ ¿Deseas agregar más unidades a este item?"
        )

        if (consulta === true) {
          compareItem.cantidad += cantidad;
        }
      } else {
        setCart([...cart, product]);
      }
    }
  }

  const removeItem = (itemID) =>{
    const actualizarCart = cart.filter((cart) => {
      return cart.id !== itemID
    })
    setCart (actualizarCart)
  }

  const clearCart = (cart) => {
    return setCart([])
  }

  return <CartContext.Provider value={{ items, setItems, cart, setCart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
};
