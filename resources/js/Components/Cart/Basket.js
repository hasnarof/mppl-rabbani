import {useState, useEffect} from 'react'

const Basket = (props) => {
    const {cartItems, totalPrice} = props;
    const {onAdd, onRemove} = props;
    return (
        <div className="">
            <div className="">
                <div className="" id="basket">
                    <h1>Cart</h1>
                    {cartItems.map(item => (
                        <ul>{item.product.nama}, {item.productColor.warna}, {item.productSize.ukuran} - {item.qty} x {item.productColor.harga}
                            <button className="btn btn-danger" onClick={()=>onRemove(item.product, item.productColor, item.productSize)}>-</button>
                            <button className="btn btn-primary" onClick={()=>onAdd(item.product, item.productColor, item.productSize)}>+</button>
                        </ul>
                    ))}
                    <p>Total: Rp{totalPrice}</p>
                </div>
            </div>

        </div>
    );
};

export default Basket;
