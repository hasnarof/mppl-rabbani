import { Link, usePage } from "@inertiajs/inertia-react";
import App from "../../Layouts/App";

const TransactionDetail = () => {
    const {transaction, transactionDetails} = usePage().props;
    return (
        <App>
            <h1>Order Detail</h1>
            <table class="table">
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
        </App>
    );
}

export default TransactionDetail;
