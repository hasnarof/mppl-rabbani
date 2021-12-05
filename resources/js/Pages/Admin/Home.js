import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from '@inertiajs/inertia';
import AppAdmin from "../../Layouts/AppAdmin";

const Home = () => {
    return (
        <AppAdmin>
            <div id="admin-home"> 
                <div className="background-color">
                    <div className="container card">
                        <div className="col-12">
                            <div className="table-responsive">
                                {/* <table className="table align-middle">
                                    <thead>
                                        <tr>
                                            <th>Tanggal Checkout</th>
                                            <th>Total Harga</th>
                                            <th>Bukti Pembayaran</th>
                                            <th>Status Transaksi</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                </table> */}
                                {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/admin/products">HOME</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/admin/transactions">TRANSACTION</a>
                                    </li>
                                {/* </ul> */}
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </AppAdmin>
    );
}

export default Transactions;
