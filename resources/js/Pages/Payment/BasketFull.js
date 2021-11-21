import App from '../../Layouts/App';
import React from 'react';
import { usePage } from '@inertiajs/inertia-react';
import RemoveButton from '../../Components/Cart/RemoveButton';
import AddButton from '../../Components/Cart/AddButton';
import { Inertia } from '@inertiajs/inertia';

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
    const {onAdd, onRemove} = props;

    const checkout=()=>{
        Inertia.post('/checkout', {cartItems:cartItems});
    }
    return (
        <App>
            <div className="container">
            <h1>Cart</h1>
                {cartItems.map(item => (
                    <ul>{item.product.nama}, {item.productColor.warna}, {item.productSize.ukuran} - {item.qty} x {item.productColor.harga}
                        <RemoveButton className="btn btn-danger" product={item.product} productColor={item.productColor} productSize={item.productSize}>-</RemoveButton>
                        <AddButton className="btn btn-primary" product={item.product} productColor={item.productColor} productSize={item.productSize}>+</AddButton>
                    </ul>
                ))}
                <p>Total: Rp{totalPrice}</p>
                <button className="btn btn-primary" onClick={checkout}>Checkout</button>

            </div>
        </App>
    );
}

export default BasketFull;
