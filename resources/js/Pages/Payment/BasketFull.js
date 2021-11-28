import App from '../../Layouts/App';
import React from 'react';
import {useState, useEffect} from 'react'
import { usePage } from '@inertiajs/inertia-react';
import RemoveButton from '../../Components/Cart/RemoveButton';
import AddButton from '../../Components/Cart/AddButton';
import { Inertia } from '@inertiajs/inertia';
import axios from 'axios';

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

    const [ongkir, setOngkir] = useState('123');
    const [cartItems, setCartItems] = useStickyState([], "cartItems");
    const [totalPrice, setTotalPrice] = useStickyState(0, "totalPrice");
    const [kurir, setKurir] = useState('jne');
    const {onAdd, onRemove} = props;
    const { auth } = usePage().props;

    const checkout=()=>{
        Inertia.post('/checkout', {cartItems:cartItems, ongkir: ongkir, kurir: kurir});
    }

    const changeKurir = (newKurir) => {
        setKurir(newKurir);
    }

    useEffect(()=>{
        setOngkir('Loading ...');
        axios.get('/cek_ongkir/'+auth.user.resipient_city_id+'/'+kurir)
            .then((response) => {
                setOngkir(response.data);
            }, (error) => {
            console.log(error);
        });

    }, [kurir])
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
                <p>Total Biaya: Rp{totalPrice}</p>
                <p>Pilih kurir:</p>
                <select name="kurir" id="kurir" onChange={ e => changeKurir(e.target.value) }>
                    <option value="jne">JNE</option>
                    <option value="tiki">TIKI</option>
                    <option value="pos">POS Indonesia</option>
                </select>
                <p>Lokasi alamat: {auth.user.resipient_address}, {auth.user.resipient_city}, {auth.user.resipient_province} {auth.user.resipient_postal_code}</p>
                <p>Alamat Rabbani: Bekasi, Jawa Barat</p>
                <p>Ongkir: Rp{ongkir}</p>
                <p>Total Biaya dengan Ongkir: Rp{totalPrice + ongkir}</p>
                <button className="btn btn-primary" onClick={checkout}>Checkout</button>

            </div>
        </App>
    );
}

export default BasketFull;
