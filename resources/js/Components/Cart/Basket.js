import { Inertia } from '@inertiajs/inertia';
import {useState, useEffect} from 'react'

const Basket = (props) => {
    const {cartItems, totalPrice} = props;
    const {onAdd, onRemove, setCartOpen} = props;

    const checkout=()=>{
        Inertia.get('/cart');
    }

    return (

                <div className="" id="basket">
                    <div className="modal-content w-100">
                        <div className="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Shopping Cart</h5>
                            <button type="button" className="btn-close" aria-label="Close" onClick={()=>setCartOpen(false)}></button>
                        </div>
                        <div class="modal-body">
                            <ul>
                            {cartItems.map(item => (
                                <li>
                                    <div className="card rounded-3 mb-4">
                                        <div className="card-body p-4">
                                            <div className="row d-flex justify-content-between align-items-center">
                                                {/* <div className="col row"> */}
                                                    <div className="col-md-2">
                                                        <img src={`/storage/${item.productColor.image}`} className="img-fluid rounded-3" alt="img"></img>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <p className="lead fw-normal mb-2">{item.product.nama}</p>
                                                        <p><span className="text-muted">Size: </span>{item.productSize.ukuran} <span className="text-muted">Color: </span>{item.productColor.warna}</p>
                                                        <h5 className="mb-0">Rp{item.productColor.harga}</h5>
                                                    </div>

                                                {/* </div> */}
                                                <div className="col-md-3 d-flex">
                                                    <button className="btn btn-danger" onClick={()=>onRemove(item.product, item.productColor, item.productSize)}>-</button>
                                                    <span className="p-2">{item.qty}</span>
                                                    <button className="btn btn-primary" onClick={()=>onAdd(item.product, item.productColor, item.productSize)}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                </li>
                            ))}
                            </ul>
                            <div className="d-flex justify-content-end">
                                <h5>Total: Rp{totalPrice}</h5>
                            </div>
                        </div>
                        <div id="btn-basket" class="modal-footer">
                            <button type="button" class="btn btn-secondary" onClick={()=>setCartOpen(false)}>Close</button>
                            <button className="btn btn-primary" onClick={checkout}>Checkout</button>
                        </div>
                    </div>
                </div>


    );
};

export default Basket;
