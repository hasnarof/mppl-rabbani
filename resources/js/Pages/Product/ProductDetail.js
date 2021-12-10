import {useState, useEffect} from 'react'
import { usePage } from '@inertiajs/inertia-react';
import App from '../../Layouts/App';
import AddButton from '../../Components/Cart/AddButton';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ProductDetail = (props) => {
    const { product } = usePage().props;

    console.log(product);
    const [productColor, setProductColor] = useState(product.colors[0]);
    const [productSize, setProductSize] = useState(product.sizes[0]);

    const [cartItems, setCartItems] = useState([]);

    function clickAddToCart() {
        // $('#addToCart').trigger('click');
        // console.log($('#addToCart'));
        let button = document.getElementById('addToCart');
        button.click();
    }


    return (
        <App>
            <div id="detail-produk" className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col col-4">
                        <h1>{product.nama}</h1>
                        {<h2>Rp {product.product_details[0].harga}</h2>}
                        <div className="info">
                            <h3>Detail Produk</h3>
                            <p dangerouslySetInnerHTML={{ __html: product.detail }}></p>
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


                        <button onClick={clickAddToCart} className="btn btn-primary" >Add to Cart</button>

                    </div>
                    <div className="col col-4 center">
                        <img src={`/storage/${productColor.image}`} width="300" className="vertical-center"/>
                    </div>
                    <div className="col col-4">
                        <h2 className="title">Testimonial</h2>
                        {product.reviews.map((item, index)=>(
                            <div className="container row">
                                <div className="col-3">
                                    <img src={`/storage/${item.user.avatar}`} alt="Avatar" className="image"></img>
                                </div>
                                <div className="col-9">
                                    <p className="text">{item.user.name}</p>
                                    <Rating readonly initialRating={item.rating}
                                        emptySymbol=// <FontAwesomeIcon icon="fa-solid fa-star-sharp" /> // <span className="fa fa-star"></span> //{[1, 2, 3, 4, 5].map((n) => (
                                        // "far fa-star"
                                        {
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30"
                                            height="30"
                                            fill="currentColor"
                                            class="bi bi-star"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                        </svg>
                                        }
                                        fullSymbol={[1, 2, 3, 4, 5].map((n) => (
                                        // <span className="icon-text"></span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30"
                                            height="30"
                                            fill="yellow"
                                            class="bi bi-star-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        ))}

                                    />
                                    <p>{item.ulasan}</p>
                                </div>
                            </div>

                        ))}
                        <div className="container row">
                            <div className="right">
                                <a><
                                    p className="testi">See All</p>
                                </a>
                                <i class="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer id="footer">
                    <div class="footer-top">
                        <div class="container">
                            <div class="row">

                            <div class="col-lg-3 col-md-6">
                                <div class="footer-info">
                                <h3><b>Rabbani Mall</b></h3>
                                <p>
                                    Keputih Street <br></br>
                                    Surabaya, Indonesia<br></br><br></br>
                                    <strong>Phone:</strong> +62 8775 5775 223<br></br>
                                    <strong>Email:</strong> rabbanimall@gmail.com<br></br>
                                </p>
                                <div class="social-links mt-3">
                                    <a href="#" class="twitter">
                                        <button>
                                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                        </button>
                                    </a>
                                    <a href="#" class="facebook">
                                        <button>
                                            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                        </button>
                                    </a>
                                    <a href="#" class="instagram">
                                        <button>
                                            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </button>
                                    </a>
                                    <a href="#" class="linkedin">
                                        <button>
                                            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </button>
                                    </a>
                                </div>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-6 footer-links">
                                <h4>INFORMATION</h4>
                                <ul>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Contact Us</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">FAQ</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">How to Order</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">How to Pay</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Our Products</h4>
                                <ul>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Clothing</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Hijab</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Pashmina</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-4 col-md-6 footer-newsletter">
                                <h4>ABOUT US</h4>
                                <p>Founded in 1994, Rabbani comes with a variety of kind and sweet colors as a characteristic of Muslim women who always spread kindness. Rabbaners always inspires us to present a comfortable hijab daily and many color choices that can express Rabbaners days.</p>

                                <p>Express your day with Rabbani colors</p>
                            </div>

                            </div>
                        </div>
                    </div>
                </footer>
            <AddButton id="addToCart" className="btn btn-primary" product={product} productColor={productColor} productSize={productSize}>Add to Cart</AddButton>
        </App>
    );
};

export default ProductDetail;
