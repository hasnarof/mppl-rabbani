import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from '@inertiajs/inertia';
import App from "../../Layouts/App";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Transactions = () => {
    const {transactions} = usePage().props;
    const receiveOrder=(transactionId)=>{
        Inertia.post('/transaction/receive_order', {transactionId:transactionId});
    }
    return (
        <App>
            <div className="background-color">
                <div id="daftar-transaksi">
                    <div className="container card">
                        <h1>My Order</h1>
                        <div className="table-responsive">
                            <table class="table align-middle">
                                <thead>
                                    <tr>
                                    <th>No Order</th>
                                    <th scope="col">Checkout Date</th>
                                    <th scope="col">Total Cost</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                {transactions.data.map((item, index)=>(
                                    <tr>
                                        <td>#{item.id}</td>
                                        <td scope="row">{item.created_at}</td>
                                        <td>Rp {(item.total_harga/1000).toFixed(3)}</td>
                                        <td>{item.status_transaksi}</td>
                                        <td>
                                            <Link href={`/transaction/${item.id}`} className="btn btn-primary rounded-pill">Detail Transaction</Link>
                                            {item.status_transaksi == 'To Receive' && <button className="btn btn-primary rounded-pill" onClick={()=>{receiveOrder(item.id)}}>Receive Order</button>}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
}

export default Transactions;
