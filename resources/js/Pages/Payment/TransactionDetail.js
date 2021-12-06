import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from '@inertiajs/inertia';
import {useState} from 'react'
import App from "../../Layouts/App";
import { useForm } from '@inertiajs/inertia-react'

const TransactionDetail = () => {
    const {transaction} = usePage().props;
    const {auth} = usePage().props;
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

    console.log(transaction)

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
                                            {/* <th>No</th> */}
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
                                                {/* <td>{index + 1}</td> */}
                                                <td>{item.product_detail.nama}</td>
                                                <td>{item.jumlah_produk}</td>
                                                <td><p className="text-end">Rp {(item.harga_per_produk/1000).toFixed(3)}</p></td>
                                                <td><p className="text-end">Rp {(item.jumlah_produk * item.harga_per_produk/1000).toFixed(3)}</p></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td colspan="3"></td>
                                            <td>In Total</td>
                                            <td><p className="text-end">Rp {(transaction.data.total_harga/1000).toFixed(3)}</p></td>
                                        </tr>
                                    </tbody>
                                </table>
                                {!transaction.data.bukti_pembayaran && <div className="bukti-bayar text-end">
                                    <div className="d-flex justify-content-between">
                                    <p>Silahkan bayar pada rekening BRI Rabbani Mall dan upload bukti pembayaran:</p>

                                    <form onSubmit={handleSubmit} >
                                    <div className="bukti">
                                        <input type="file" value={undefined} onChange={e => setData('buktiPembayaran', e.target.files[0])}/>
                                        {progress && (
                                        <progress value={progress.percentage} max="100">
                                            {progress.percentage}%
                                        </progress>
                                        )}
                                    </div>
                                    <button type="submit" className="rounded-pill">Submit</button>
                                    </form>
                                    </div>
                                </div>}
                            </div>
                            <div className="card status-order">
                                <h4>Status Payment For This Order :</h4>
                                <div className="d-flex flex-row">
                                    <button className={"btn mx-2 rounded-pill " + (transaction.data.status_transaksi === 'To Pay' ? 'btn-pink' : 'btn-putih')}>To Pay</button>
                                    <button className={"btn mx-2 rounded-pill " + (transaction.data.status_transaksi === 'To Payment Confirm' ? 'btn-pink' : 'btn-putih')}>To Payment Confirm</button>
                                    <button className={"btn mx-2 rounded-pill " + (transaction.data.status_transaksi === 'To Ship' ? 'btn-pink' : 'btn-putih')}>To Ship</button>
                                    <button className={"btn mx-2 rounded-pill " + (transaction.data.status_transaksi === 'To Receive' ? 'btn-pink' : 'btn-putih')}>To Receive</button>
                                    <button className={"btn mx-2 rounded-pill " + (transaction.data.status_transaksi === 'Completed' ? 'btn-pink' : 'btn-putih')}>Completed</button>
                                    <button className={"btn mx-2 rounded-pill " + (transaction.data.status_transaksi === 'Cancelled' ? 'btn-pink' : 'btn-putih')}>Cancelled</button>

                                </div>

                            </div>
                        </div>
                        <div className="card col-3">
                            <div className="address">
                                <h4>Detail Address</h4>
                                <p>
                                    {auth.user.resipient_name} <br></br>
                                    {auth.user.resipient_address} <br></br>
                                    {auth.user.resipient_province} <br></br>
                                    {auth.user.resipient_country} <br></br>
                                    {auth.user.resipient_postal_code} <br></br>
                                </p>
                            </div>
                            <div className="address">
                                <h4>Username</h4>
                                <p>
                                    {auth.user.username}
                                </p>
                            </div>
                            <div className="address">
                                <h4>Courir</h4>
                                <p>
                                    {transaction.data.kurir == 'jne' && <span>JNE</span>}
                                    {transaction.data.kurir == 'tiki' && <span>TIKI</span>}
                                    {transaction.data.kurir == 'pos' && <span>POS Indonesia</span>}
                                </p>
                            </div>
                            <div className="address">
                                <h4>Payment Method</h4>
                                <p>
                                    mBanking BRI<br></br>
                                    61234567<br></br>
                                    A. N. Rabbani Mall
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
