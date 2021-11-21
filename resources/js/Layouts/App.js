import Navbar from "../Components/Navbar";
import Basket from "../Components/Cart/Basket";
import { Component } from "react";
import React from 'react';
import {useState, useEffect} from 'react'
import { set } from "lodash";


const App =(props)=> {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const onAdd = (product, productColor, productSize) => {
        console.log('on add berhasil dipanggil');

        // if(localStorage.getItem('cartItems')){
        //     cartItems = JSON.parse(localStorage.getItem('cartItems'));
        // }
        const exist = cartItems.find((x) => x.product == product && x.productColor == productColor && x.productSize == productSize);
        if (exist) {
          setCartItems(
            cartItems.map((x) =>
            x.product == product && x.productColor == productColor && x.productSize == productSize ? { ...exist, qty: exist.qty + 1 } : x
            )
          );
        } else {
          setCartItems([...cartItems, { product: product, productColor: productColor, productSize: productSize, qty: 1 }]);

        }
        setTotalPrice(totalPrice+Number(productColor.harga));
        // localStorage.setItem('cartItems', JSON.stringify(cartItems));

      };

    const onRemove = (product, productColor, productSize) => {
        const exist = cartItems.find((x) => x.product == product && x.productColor == productColor && x.productSize == productSize);
        if (exist.qty === 1) {
          setCartItems(cartItems.filter((x) => x.product != product || x.productColor != productColor || x.productSize != productSize));
        } else {
          setCartItems(
            cartItems.map((x) =>
            x.product == product && x.productColor == productColor && x.productSize == productSize ? { ...exist, qty: exist.qty - 1 } : x
            )
          );
        }
        setTotalPrice(totalPrice-Number(productColor.harga));

    };

        const childrenWithProps = React.Children.map(props.children, child => {
            // Checking isValidElement is the safe way and avoids a typescript
            // error too.
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                  onAdd: onAdd,
                  onRemove: onRemove,
               });
            }
            return child;
          });

          return (
            <>
            <div>
                <Navbar></Navbar>
                <Basket cartItems={cartItems} totalPrice={totalPrice} onAdd={onAdd} onRemove={onRemove}></Basket>
            </div>
            <main>{childrenWithProps}</main>
            </>
          )
}

export default App;

