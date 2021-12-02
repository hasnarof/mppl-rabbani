import React from 'react';
import App from '../Layouts/App';
import { usePage } from '@inertiajs/inertia-react';

const Home = () => {
    const { products } = usePage().props;

    console.log('products');

    return (
        <App>
            <React.Fragment>
            <h1>Selamat belajar React!</h1>
            </React.Fragment>
            <div className="container">
                <h1>Best Seller</h1>
                <table className="table">
                    <tbody>
                        {products.data.map((item, index)=> (
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
