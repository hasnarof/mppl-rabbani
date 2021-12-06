import React from 'react';
import App from '../Layouts/App';
import { usePage } from '@inertiajs/inertia-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    const { all_products, best_seller } = usePage().props;

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

            <div className="background-color">
                <div className="container">
                    <h1 id="bestseller" className="mb-8 mt-8"><strong>Best Seller</strong></h1>
                        <div className="row row-cols-1 row-cols-md-4 g-4">
                            {best_seller.map((item, index)=> (
                                <div id="home-best-seller" className="col">
                                    <div className="card  mx-auto">
                                        <a href={`/product/${item.id}`} >
                                            <img src={`/storage/${item.colors[0].image}`} className="card-img-top" alt="img"></img>
                                        </a>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.nama}</h5>
                                            {<p className="card-text">Rp {(item.colors[0].harga/1000).toFixed(3)}</p>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    <div id="home-view-all" className="center">
                        <a href={`/products`} className="btn btn-primary">View All Products</a>
                    </div>
                </div>

                <a href="/products">
                    <img src={`/img/pleats.gif`} className="d-block w-100"/>
                </a>

                <div className="container">
                    <h1 id="bestseller" className="mb-8 mt-8"><strong>All Products</strong></h1>
                        <div className="row row-cols-1 row-cols-md-4 g-4">
                            {all_products.map((item, index)=> (
                                <div id="home-best-seller" className="col">
                                    <div className="card  mx-auto">
                                        <a href={`/product/${item.id}`} >
                                            <img src={`/storage/${item.colors[0].image}`} className="card-img-top" alt="img"></img>
                                        </a>
                                        <div className="card-body center">
                                            <h5 className="card-title">{item.nama}</h5>
                                            {<p className="card-text">Rp {(item.colors[0].harga/1000).toFixed(3)}</p>}
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
            </div>
        </App>
    );
};

export default Home;
