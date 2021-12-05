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
            <div className="container card">
                <h1>All Transactions</h1>
                <div className="table-responsive">
                    <table class="table">
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
                                    <td>{item.total_harga}</td>
                                    <td><a href={`/storage/${item.bukti_pembayaran}`} target="_blank">Link Gambar</a></td>
                                    <td>{item.status_transaksi}</td>
                                    <td>
                                        <Link href={`/transaction/${item.id}`} className="btn btn-primary rounded-pill">Detail Transaction</Link>
                                        {item.status_transaksi == 'To Confirm Payment' && <button className="btn btn-primary rounded-pill" onClick={()=>{confirmPayment(item.id)}}>Confirm Payment</button>}
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </AppAdmin>
    );
}

export default Transactions;
