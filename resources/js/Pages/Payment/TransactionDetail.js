import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from '@inertiajs/inertia';
import {useState} from 'react'
import App from "../../Layouts/App";
import { useForm } from '@inertiajs/inertia-react'

const TransactionDetail = () => {
    const {transaction, transactionDetails} = usePage().props;

    const { data, setData, post, progress } = useForm({
        transactionId: transaction.id,
        buktiPembayaran: null,
    })

    function handleSubmit(e) {
        e.preventDefault()
        post('/transaction/upload_payment_proof', data, {
            forceFormData: true,
        });
    }

    return (
        <App>
            <div className="container">
                <h1>Order Detail</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionDetails.map((item, index)=>(
                            <tr>
                                <td><img src={`/storage/${item.product_detail.image}`} width={100} /></td>
                                <td>{item.product_detail.nama}</td>
                                <td>{item.jumlah_produk}</td>
                                <td>{item.harga_per_produk}</td>
                                <td>{item.jumlah_produk * item.harga_per_produk}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                <p>Total: Rp{transaction.total_harga}</p>

                <form onSubmit={handleSubmit} >
                    <input type="file" value={undefined} onChange={e => setData('buktiPembayaran', e.target.files[0])}/>
                    {progress && (
                    <progress value={progress.percentage} max="100">
                        {progress.percentage}%
                    </progress>
                    )}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </App>
    );
}

export default TransactionDetail;
