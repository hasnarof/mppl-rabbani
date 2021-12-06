import React from 'react';
import App from '../../Layouts/App';
import { usePage } from '@inertiajs/inertia-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Inertia } from '@inertiajs/inertia'


const Products = () => {
    const { new_arrivals, all_products } = usePage().props;

    function handleSubmit(e) {
        e.preventDefault()
        let form = $('#filterForm').serialize();
        Inertia.post(`/products/filter`, {form: form});
    }

    return (
        <App>
            <div className="background-color">
                <div id="daftar-produk" className="container">
                    <div className="row">
                        <div className="col-2">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Categories</h5>
                                    <form id="filterForm" onSubmit={handleSubmit}>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="category" value="Hijab" id="flexCheckDefault"></input>
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Hijab
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="category" value="Clothing" id="flexCheckDefault"></input>
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Clothing
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="category" value="Pashmina" id="flexCheckDefault"></input>
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Pashmina
                                            </label>
                                        </div>
                                        <button className="btn btn-primary">Filter</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                        <div className="col-10">
                            <div className="input-group rounded">
                                <input type="search" className="form-control rounded-pill search" placeholder="Search" aria-label="Search"
                                aria-describedby="search-addon" />
                                <div className="ms-1" id="search-addon">
                                    <a href="#" class="search">
                                        <button>
                                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                                        </button>
                                    </a>
                                </div>
                            </div>

                            <h1 className="mt-4">Our Products</h1>
                            <div className="row row-cols-1 row-cols-md-4 g-4">
                                {all_products.map((item, index)=> (
                                <div className="col">
                                    <div className="card">
                                    <a href={`/product/${item.id}`}>
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
            </div>
        </App>

    );
};

export default Products;
