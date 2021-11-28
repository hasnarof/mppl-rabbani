import React from 'react';
import App from '../../Layouts/App';
import { usePage } from '@inertiajs/inertia-react';

const Products = () => {
    const { new_arrivals, all_products } = usePage().props;

    console.log('products');

    return (
        <App>
            <div className="container">
                <h1>New Arrivals</h1>
                <table className="table">
                    <tbody>
                        {new_arrivals.map((item, index)=> (
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
                <h1>Our Products</h1>
                <table className="table">
                    <tbody>
                        {all_products.map((item, index)=> (
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

export default Products;
