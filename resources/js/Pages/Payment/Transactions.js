import { Link, usePage } from "@inertiajs/inertia-react";
import App from "../../Layouts/App";

const Transactions = () => {
    const {transactions} = usePage().props;
    return (
        <App>
            <h1>My Order</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th>Tanggal Checkout</th>
                        <th>Total Harga</th>
                        <th>Status Transaksi</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((item, index)=>(
                        <tr>
                            <td>{item.created_at}</td>
                            <td>{item.total_harga}</td>
                            <td>{item.status_transaksi}</td>
                            <td><Link href={`/transaction/${item.id}`} className="btn btn-primary">Detail</Link></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </App>
    );
}

export default Transactions;
