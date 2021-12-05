import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from '@inertiajs/inertia';
import AppAdmin from "../../Layouts/AppAdmin";

const Transactions = () => {
    const {transactions} = usePage().props;
    const confirmPayment=(transactionId)=>{
        Inertia.post('/admin/confirm_payment', {transactionId:transactionId});
    }
    return (
        <AppAdmin>
            <div id="admin-transaksi"> 
                <div className="background-color">
                    <div className="container card">
                        <h1>All Transactions</h1>
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table align-middle">
                                    <thead>
                                        <tr>
                                            <th>Tanggal Checkout</th>
                                            <th>Total Harga</th>
                                            <th>Bukti Pembayaran</th>
                                            <th>Status Transaksi</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transactions.map((item, index)=>(
                                            <tr>
                                                <td>{item.created_at}</td>
                                                <td><p className="m-1">Rp {(item.total_harga/1000).toFixed(3)}</p></td>
                                                <td><a href={`/storage/${item.bukti_pembayaran}`} target="_blank">Link Gambar</a></td>
                                                <td>{item.status_transaksi}</td>
                                                <td>
                                                    <div id="btn-detail-tran">
                                                        <Link href={`/transaction/${item.id}`} className="btn btn-primary">Detail</Link>
                                                    </div>
                                                    <div id="btn-confirm-tran">
                                                        <button className="btn btn-primary" onClick={()=>{confirmPayment(item.id)}}>Confirm Payment</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>     
        </AppAdmin>
    );
}

export default Transactions;
