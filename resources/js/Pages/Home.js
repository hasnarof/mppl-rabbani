import React from 'react';
import App from '../Layouts/App';
import { usePage } from '@inertiajs/inertia-react';
import pic1 from '../../../public/img/1.png';
import pic2 from '../../../public/img/2.png';
import pic3 from '../../../public/img/3.png';

const Home = () => {
    const { products } = usePage().props;

    console.log('products');

    return (
        <App>
            <React.Fragment>
            {/* <h1>Selamat belajar React!HAHAHAH</h1> */}
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="{pic1}" className="d-block w-100" alt="1"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="{pic2}" className="d-block w-100" alt="2"/>
                    </div>
                    <div className="carousel-item">
                        <img src="{pic3}" className="d-block w-100" alt="3"/>
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
                <h1>Best Sellereeee</h1>
                <table className="table">
                    <tbody>
                        {products.map((item, index)=> (
                            <tr>
                                <td>{item.name}</td>
                                <td>
                                    <img src={`/storage/${item.image}`} alt="" width="200" />
                                </td>
                                <td>{item.harga_produk}</td>
                                <td>
                                    <a href={`/product/${item.id}`} className="btn btn-primary">Detail</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </App>
        
    );
};

export default Home;
