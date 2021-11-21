import App from '../../Layouts/App';
import React from 'react';
import { usePage } from '@inertiajs/inertia-react';


const BasketFull = (props) => {
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

    return (
        <App>
            <div className="container">
            <h1>Cart</h1>
                {cartItems.map(item => (
                    <ul>{item.product.nama}, {item.productColor.warna}, {item.productSize.ukuran} - {item.qty} x {item.productColor.harga}
                        <button className="btn btn-danger" onClick={()=>onRemove(item.product, item.productColor, item.productSize)}>-</button>
                        <button className="btn btn-primary" onClick={()=>onAdd(item.product, item.productColor, item.productSize)}>+</button>
                    </ul>
                ))}
                <p>Total: Rp{totalPrice}</p>
            </div>
        </App>
    );
}

export default BasketFull;
