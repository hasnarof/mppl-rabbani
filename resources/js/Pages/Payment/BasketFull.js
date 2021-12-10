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
        console.log(ongkir)
        console.log(kurir)
        Inertia.post('/checkout', {cartItems:cartItems, ongkir: ongkir, kurir: kurir});
    }

    const changeKurir = (newKurir) => {
        setKurir(newKurir);
    }

    useEffect(()=>{
        setOngkir('Loading ...');
        axios.get('/cek_ongkir/'+auth.user.resipient_city_id+'/'+kurir)
            .then((response) => {
                console.log(response)
                setOngkir(response.data);
            }, (error) => {
            console.log(error);
        });

    }, [kurir])
    return (
        <App>
            <div id="cart">
                <div className="container">
                    <h1>Shopping Cart</h1>
                    <div className="row">
                        <div className="card col-8">
                            <div className="table-responsive">
                            {/* {cartItems.map(item => ( */}
                                <table className="table align-middle">
                                    <thead>
                                        <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {cartItems.map(item => (
                        <ul>{item.product.nama}, {item.productColor.warna}, {item.productSize.ukuran} - {item.qty} x {item.productColor.harga}
                            <RemoveButton className="btn btn-danger" product={item.product} productColor={item.productColor} productSize={item.productSize}>-</RemoveButton>
                            <AddButton className="btn btn-primary" product={item.product} productColor={item.productColor} productSize={item.productSize}>+</AddButton>
                        </ul>
                    ))} */}
                                        {cartItems.map((item,index)=>(
                                            <tr>
                                                 <td>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                                </div>
                                                </td>
                                                <td><img src={`/storage/${item.productColor.image}`} width="100"/></td>
                                                <td>{item.product.nama}</td>
                                                <td>{item.qty}</td>
                                                <td>Rp {item.productColor.harga}</td>
                                                <td className="text-end">Rp {(item.qty * item.productColor.harga/1000).toFixed(3)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td colSpan="4"></td>
                                            <td>In Total</td>
                                            <td className="text-end">Rp {(totalPrice/1000).toFixed(3)}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4"></td>
                                            <td>Delivery</td>
                                            <td className="text-end">Rp {(ongkir/1000).toFixed(3)}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4"></td>
                                            <td>Total Amount</td>
                                            <td className="text-end">Rp {((totalPrice + ongkir)/1000).toFixed(3)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* ))}  */}
                            </div>
                        </div>
                        <div className="card col-3">
                            <h3>Order Summary</h3>
                            <div className="summary">
                                <h4>Courir</h4>
                                <p>
                                    <select name="kurir" id="kurir" onChange={ e => changeKurir(e.target.value) }>
                                        <option value="jne">JNE</option>
                                        <option value="tiki">TIKI</option>
                                        <option value="pos">POS Indonesia</option>
                                    </select>
                                </p>
                            </div>
                            <div className="summary">
                                <h4>Delivery Address</h4>
                                <p>
                                    {auth.user.resipient_address}, {auth.user.resipient_city}, {auth.user.resipient_province} {auth.user.resipient_postal_code}
                                </p>
                            </div>
                            <div className="summary">
                                <h4>Rabbani Address</h4>
                                <p>
                                    Bekasi, Jawa Barat
                                </p>
                            </div>

                            <button className="btn btn-primary rounded-pill" onClick={checkout}>Checkout</button>
                        </div>
                    </div>



                </div>
            </div>
        </App>
    );
}

export default BasketFull;
