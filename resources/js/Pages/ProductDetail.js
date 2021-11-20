import React from 'react'
import { usePage } from '@inertiajs/inertia-react';
import Navbar from '../Components/Navbar';

const ProductDetail = () => {
    const { product } = usePage().props;

    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
            <h1>{product.nama}</h1>
            <h3>Color</h3>
            {product.colors.map((product, index) => {
                return <div>
                    <input type="radio" id={product.warna} value={product.warna} name="size"/>
                    <label htmlFor={product.warna}>{product.warna}</label>
                </div>
            })}
            <h3>Size</h3>
            {product.sizes.map((product, index) => {
                return <div>
                    <input type="radio" id={product.ukuran} value={product.ukuran} name="size"/>
                    <label htmlFor={product.ukuran}>{product.ukuran}</label>
                </div>
            })}
            </div>


        </div>
    );
};

export default ProductDetail;
