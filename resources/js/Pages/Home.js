import React from 'react';
import App from '../Layouts/App';
import { usePage } from '@inertiajs/inertia-react';

const Home = () => {
    const { products } = usePage().props;

    console.log('products');

    return (
        <App>
            <React.Fragment>
            <div id="carouselExampleInterval" className="mt-100 carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner ">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <a href="/products">
                            <img src={`/img/1.png`} className="d-block w-100" alt="1"/>
                        </a>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <a href="/products">
                            <img src={`/img/2.png`} className="d-block w-100" alt="2"/>
                        </a>
                    </div>
                    <div className="carousel-item">
                        <a href="/products">
                            <img src={`/img/3.png`} className="d-block w-100" alt="3"/>
                        </a>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </React.Fragment>

            <div className="container">
                <h1 id="bestseller" className="mb-8 mt-8"><strong>Best Seller</strong></h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {products.map((item, index)=> (
                            <div id="home-best-seller" className="col">
                                <div className="card  mx-auto">
                                    <a href={`/product/${item.id}`} >
                                        <img src={`/storage/${item.image}`} className="card-img-top" alt="img"></img>
                                    </a>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.harga_produk}</p>
                                    </div>
                                </div>
                            </div>
                        ))}    
                    </div>
                <div id="home-view-all" className="center">
                    <a href={`/products`} className="btn btn-primary">View All Products</a>
                </div>
            </div>

            <img src={`/images/pleats.gif`} className="d-block w-100"/>
            
            <div className="container">
                <h1 id="bestseller" className="mb-8 mt-8"><strong>Best Seller</strong></h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {products.map((item, index)=> (
                            <div id="home-best-seller" className="col">
                                <div className="card  mx-auto">
                                    <a href={`/product/${item.id}`} >
                                        <img src={`/storage/${item.image}`} className="card-img-top" alt="img"></img>
                                    </a>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.harga_produk}</p>
                                    </div>
                                </div>
                            </div>
                        ))}    
                    </div>
                <div id="home-view-all" className="center">
                    <a href={`/products`} className="btn btn-primary">View All Products</a>
                </div>
            </div>

            <footer id="footer">
                <div class="footer-top">
                <div class="container">
                    <div class="row">

                    <div class="col-lg-3 col-md-6">
                        <div class="footer-info">
                        <h3><b>Hekto</b></h3>
                        <p>
                            Keputih Street <br></br>
                            Surabaya, Indonesia<br></br><br></br>
                            <strong>Phone:</strong> +1 5589 55488 55<br></br>
                            <strong>Email:</strong> hektofurniture@gmail.com<br></br>
                        </p>
                        <div class="social-links mt-3">
                            <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                            <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                            <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                            <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                            <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                        </div>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Pages</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Products</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Blog</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Shop</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Our Furniture</h4>
                        <ul>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Sofa</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Chair</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Lamp</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Cupboard</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Table</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-4 col-md-6 footer-newsletter">
                        <h4>Our Newsletter</h4>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    </div>

                    </div>
                </div>
                </div>

            </footer> 
        </App> 
    );
};

export default Home;
