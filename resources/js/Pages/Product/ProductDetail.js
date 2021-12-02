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
            <div id="detail-produk" className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col col-4">
                        <div>
                            <i class="fas fa-arrow-left"></i>
                            <p className="back">Back</p>
                        </div>
                        <h1>{product.nama}</h1>
                        <h2>Rp 339.000</h2>
                        <div className="info">
                            <h3>Detail Produk</h3>
                            <p>Outfit oneset multifungsi yang bisa digunakan untuk hangout, kegiatan formal, ataupun untuk outfit rumahan. Terdapat dua item yaitu pants dan tops yang bisa dibeli satu set atau terpisah. Dilengkapi empat saku masing-masing dua dibagian depan tops dan disamping pantsnya. Bagian bawah pants dan topsnya terdapat tali serut. Wudhu Friendly</p>
                        </div>
                        <div className="info">
                            <h3>Bahan</h3>
                            <p>Cotton Linen
                                <br></br>
                                Kain berserat, tebal, tidak menerawang, dan sejuk
                            </p>
                        </div>
                        <div className="info">
                            <h3>Choose Color</h3>
                            <p>
                            {product.colors.map((product, index) => (
                                <div onClick={()=>setProductColor(product)} >
                                    <input type="radio" id={product.warna} value={product.warna} name="color" checked={productColor==product}/>
                                    <label htmlFor={product.warna}>{product.warna}</label>
                                </div>
                            ))}
                            </p>
                        </div>
                        <div className="info">
                            <h3>Choose Size</h3>
                            <p>
                            {product.sizes.map((product, index) => {
                                return <div onClick={()=>setProductSize(product)}>
                                    <input type="radio" id={product.ukuran} value={product.ukuran} name="size" checked={productSize==product}/>
                                    <label htmlFor={product.ukuran}>{product.ukuran}</label>
                                </div>
                            })}
                            </p>
                        </div>
                        
                        <AddButton className="btn btn-primary" product={product} productColor={productColor} productSize={productSize}>Add to Cart</AddButton>
                        
                    </div>
                    <div className="col col-4 center">
                        <img src={`/storage/${productColor.image}`} width="300" className="vertical-center"/>
                    </div>
                    <div className="col col-4">
                        <h2 className="title">Testimonial</h2>
                        <div className="container row">
                            <div className="col-3">
                                <img src={`/img/hawa-instant.jpeg`} alt="Avatar" className="image"></img>
                            </div>
                            <div className="col-9">
                                <p className="text">Chris Fox</p>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <p>John Doe saved us from a web disaster.</p>
                            </div>
                        </div>
                        <div className="container row">
                            <div className="col-3">
                                <img src={`/img/hawa-instant.jpeg`} alt="Avatar" className="image"></img>
                            </div>
                            <div className="col-9">
                                <p className="text">Chris Fox</p>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <p>John Doe saved us from a web disaster.</p>
                            </div>
                            <div className="right">
                                <a><p className="testi">See All</p></a>
                                <i class="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <h1>{product.nama}</h1>
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
                })} */}


            </div>
            {/* <AddButton className="btn btn-primary" product={product} productColor={productColor} productSize={productSize}>Add to Cart</AddButton> */}
        </App>
    );
};

export default ProductDetail;
