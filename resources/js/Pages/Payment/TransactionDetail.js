import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from '@inertiajs/inertia';
import {useState} from 'react'
import App from "../../Layouts/App";
import { useForm } from '@inertiajs/inertia-react'

const TransactionDetail = () => {
    const {transaction} = usePage().props;
    const transactionData = transaction.data;

    const { data, setData, post, progress } = useForm({
        transactionId: transactionData.id,
        buktiPembayaran: null,
    })

    function handleSubmit(e) {
        e.preventDefault()
        post('/transaction/upload_payment_proof', data, {
            forceFormData: true,
        });
    }

    console.log(transactionData);
    console.log(transaction.data.transaction_details);

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
                        {transactionData.transaction_details.map((item, index)=>(
                            <tr>
                                {/* <td><img src={`/storage/${item.product_detail.image}`} width={100} /></td> */}
                                {/* <td>{item.product_detail.nama}</td> */}
                                <td>{item.jumlah_produk}</td>
                                <td>{item.harga_per_produk}</td>
                                <td>{item.jumlah_produk * item.harga_per_produk}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                <p>Total: Rp{transactionData.total_harga}</p>

                {!transactionData.bukti_pembayaran && <form onSubmit={handleSubmit} >
                    <input type="file" value={undefined} onChange={e => setData('buktiPembayaran', e.target.files[0])}/>
                    {progress && (
                    <progress value={progress.percentage} max="100">
                        {progress.percentage}%
                    </progress>
                    )}
                    <button type="submit">Submit</button>
                </form>}
            </div>
        </App>
    );
}

export default TransactionDetail;
