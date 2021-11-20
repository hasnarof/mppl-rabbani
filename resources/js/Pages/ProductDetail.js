import {useState, useEffect} from 'react'
import { usePage } from '@inertiajs/inertia-react';
import Navbar from '../Components/Navbar';
// import route from 'ziggy';
// import Ziggy from


const ProductDetail = () => {
    const { product } = usePage().props;

    const [productColor, setProductColor] = useState(product.colors[0]);
    const [productSize, setProductSize] = useState(product.sizes[0]);

    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <h1>{product.nama}</h1>
                <img src={`/storage/${productColor.image}`} width="300"/>
                <h3>Detail Produk</h3>
                <div dangerouslySetInnerHTML={{ __html: product.detail }}></div>

                <h3>Choose Color</h3>
                {product.colors.map((product, index) => (
                    <div onClick={()=>setProductColor(product)} >
                        <input type="radio" id={product.warna} value={product.warna} name="color" checked={productColor==product}/>
                        <label htmlFor={product.warna}>{product.warna}</label>
                    </div>
                ))}
                <h3>Choose Size</h3>
                {product.sizes.map((product, index) => {
                    return <div onClick={()=>setProductSize(product)}>
                        <input type="radio" id={product.ukuran} value={product.ukuran} name="size" checked={productSize==product}/>
                        <label htmlFor={product.ukuran}>{product.ukuran}</label>
                    </div>
                })}

                <button className="btn btn-primary">Add to Cart</button>

            </div>
        </div>
    );
};

export default ProductDetail;
