import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from '@inertiajs/inertia';
import {useState} from 'react'
import App from "../../Layouts/App";
import { useForm } from '@inertiajs/inertia-react'

const TransactionDetail = () => {
    const {transaction} = usePage().props;
    // const transactionData = transaction.data;

    const { data, setData, post, progress } = useForm({
        transactionId: transaction.data.id,
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
            <div id="detail-transaksi">
                <div className="container">
                    <h1>Order Detail</h1>
                    <div className="row">
                        <div className="col-8">
                            <div className="card table-responsive">
                                <table className="table align-middle">
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
                                        {transaction.data.transaction_details.map((item, index)=>(
                                            <tr>
                                                <td><img src={`/storage/${item.product_detail.image}`} width={100} /></td>
                                                <td>{item.product_detail.nama}</td>
                                                <td>{item.jumlah_produk}</td>
                                                <td>{<p>Rp {item.harga_per_produk}</p>}</td>
                                                <td>{<p>Rp {item.jumlah_produk * item.harga_per_produk}</p>}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td colspan="3"></td>
                                            <td>In Total</td>
                                            <td>{<p>Rp {transaction.data.total_harga}</p>}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="bukti-bayar text-end">
                                    {!transaction.data.bukti_pembayaran && <form onSubmit={handleSubmit} >
                                    <div className="bukti">
                                        <input type="file" value={undefined} onChange={e => setData('buktiPembayaran', e.target.files[0])}/>
                                        {progress && (
                                        <progress value={progress.percentage} max="100">
                                            {progress.percentage}%
                                        </progress>
                                        )}
                                    </div>
                                    <button type="submit" className="rounded-pill">Submit</button>
                                    </form>}
                                </div>
                            </div>
                            <div className="card status-order">
                                <h4>Status Payment For This Order : <span>Unpaid</span></h4>
                            </div>
                        </div>
                        <div className="card col-3">
                            <div className="address">
                                <h4>Detail Address</h4>
                                <p>
                                    Bae Suzy<br></br>
                                    Keputih Street<br></br>
                                    East Java <br></br>
                                    Indonesia <br></br>
                                    61411 <br></br>
                                </p>
                            </div>
                            <div className="address">
                                <h4>Username</h4>
                                <p>
                                    baesuzy
                                </p>
                            </div>
                            <div className="address">
                                <h4>Delivery Method</h4>
                                <p>
                                    Cash On Delivery
                                </p>
                            </div>
                            <div className="address">
                                <h4>Payment Method</h4>
                                <p>
                                    mBanking BRI
                                </p>
                            </div>
                        </div>
                    </div>
                    

                    
                </div>
            </div>
        </App>
    );
}

export default TransactionDetail;
