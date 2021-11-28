import {useState, useEffect} from 'react'
import { usePage } from '@inertiajs/inertia-react';
import App from '../../Layouts/App';
import AddButton from '../../Components/Cart/AddButton';

const ProductDetail = (props) => {
    const { product } = usePage().props;

    const [productColor, setProductColor] = useState(product.colors[0]);
    const [productSize, setProductSize] = useState(product.sizes[0]);

    const [cartItems, setCartItems] = useState([]);

    return (
        <App>
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


            </div>
            <AddButton className="btn btn-primary" product={product} productColor={productColor} productSize={productSize}>Add to Cart</AddButton>
        </App>
    );
};

export default ProductDetail;
