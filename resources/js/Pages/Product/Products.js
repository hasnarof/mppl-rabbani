import React from 'react';
import App from '../../Layouts/App';
import { usePage } from '@inertiajs/inertia-react';

const Products = () => {
    const { new_arrivals, all_products } = usePage().props;

    console.log('products');

    return (
        <App>
            <div className="background-color">
                <div id="daftar-produk" className="container">
                    <div className="row">
                        <div className="col-2">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Categories</h5>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Clothing
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Footwear
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Accessories
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Hijab
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Pashmina
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="card mt-4">
                                <div class="card-body">
                                    <h5 class="card-title">Material</h5>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Cotton
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Paris
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Rayon
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Silk
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Voal
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-10">
                            <div className="input-group rounded">
                                <input type="search" className="form-control rounded-pill search" placeholder="Search" aria-label="Search"
                                aria-describedby="search-addon" />
                                <span className="input-group-text border-0" id="search-addon">
                                    <i className="fas fa-search"></i>
                                </span>
                            </div>

                            <h1 className="mt-4">New Arrivals</h1>
                            <div className="row row-cols-1 row-cols-md-4 g-4">
                                {new_arrivals.data.map((item, index)=> (
                                <div className="col">
                                    <div className="card">
                                    <a href={`/product/${item.id}`}>
                                        <img src={`/storage/${item.image}`} className="card-img-top" alt="img"></img>
                                    </a>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.nama}</h5>
                                        <p className="card-text">{item.harga}</p>
                                    </div>
                                    </div>
                                </div> 
                                ))}
                            </div>

                            <h1 className="mt-4">Our Products</h1>
                            <div className="row row-cols-1 row-cols-md-4 g-4">
                                {all_products.data.map((item, index)=> (
                                <div className="col">
                                    <div className="card">
                                    <a href={`/product/${item.id}`}>
                                        <img src={`/storage/${item.image}`} className="card-img-top" alt="img"></img>
                                    </a>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.nama}</h5>
                                        <p className="card-text">{item.harga}</p>
                                    </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>

    );
};

export default Products;
