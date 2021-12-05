import Navbar from "../Components/Navbar";
import Basket from "../Components/Cart/Basket";
import React from 'react';
import {useState, useEffect} from 'react';
import { usePage } from '@inertiajs/inertia-react';


const App =(props)=> {
    function useStickyState(defaultValue, key) {
        const [value, setValue] = React.useState(() => {
          const stickyValue = window.localStorage.getItem(key);
          return stickyValue !== null
            ? JSON.parse(stickyValue)
            : defaultValue;
        });
        React.useEffect(() => {
          window.localStorage.setItem(key, JSON.stringify(value));
        }, [key, value]);
        return [value, setValue];
    }

    const [cartItems, setCartItems] = useStickyState([], "cartItems");
    const [totalPrice, setTotalPrice] = useStickyState(0, "totalPrice");
    const [isCartOpen, setCartOpen] = useState(false);
    const { alert } = usePage().props;

    const onAdd = (product, productColor, productSize) => {
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
    <div className="background-color">
        <Navbar setCartOpen={setCartOpen}></Navbar>
        {isCartOpen && <Basket cartItems={cartItems} totalPrice={totalPrice} onAdd={onAdd} onRemove={onRemove} setCartOpen={setCartOpen}></Basket>}

        <div style={{paddingTop: '100px'}}>

                {isCartOpen && <Basket cartItems={cartItems} totalPrice={totalPrice} onAdd={onAdd} onRemove={onRemove} setCartOpen={setCartOpen}></Basket>}
            {alert && <div className="container"><div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                {alert.message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div></div>}

            <main>{childrenWithProps}</main>
        </div>

    </div>
    </>
    )
}

export default App;

