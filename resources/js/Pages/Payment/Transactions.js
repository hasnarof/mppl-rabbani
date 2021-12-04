import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from '@inertiajs/inertia';
import App from "../../Layouts/App";

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
                                    <th scope="col">Checkout Date</th>
                                    <th scope="col">Total Cost</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                {/* {transactions.map((item, index)=>( */}
                                    <tr>
                                        <td scope="row">5 days ago</td>
                                        <td>503040.00</td>
                                        <td>Completed</td>
                                        <td>
                                            <Link href="" className="btn btn-primary rounded-pill">Detail</Link>
                                            <button className="btn btn-primary rounded-pill">Receive Order</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">4 days ago</td>
                                        <td>503040.00</td>
                                        <td>To Receive</td>
                                        <td>
                                            <Link href="" className="btn btn-primary rounded-pill">Detail</Link>
                                            <button className="btn btn-primary rounded-pill">Receive Order</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">3 days ago</td>
                                        <td>503040.00</td>
                                        <td>Completed</td>
                                        <td>
                                            <Link href="" className="btn btn-primary rounded-pill">Detail</Link>
                                            <button className="btn btn-primary rounded-pill">Receive Order</button>
                                        </td>
                                    </tr>
                                {/* ))} */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* <h1>My Order</h1>
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
                    {transactions.data.map((item, index)=>(
                        <tr>
                            <td>{item.created_at}</td>
                            <td>{item.total_harga}</td>
                            <td>{item.status_transaksi}</td>
                            <td>
                                <Link href={`/transaction/${item.id}`} className="btn btn-primary">Detail</Link>
                                <button className="btn btn-primary" onClick={()=>{receiveOrder(item.id)}}>Receive Order</button>

                            </td>
                        </tr>
                    ))}

                </tbody>
            </table> */}
        </App>
    );
}

export default Transactions;
