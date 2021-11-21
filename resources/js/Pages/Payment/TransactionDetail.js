import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from '@inertiajs/inertia';
import {useState} from 'react'
import App from "../../Layouts/App";

const TransactionDetail = () => {
    const {transaction, transactionDetails} = usePage().props;

    const [values, setValues] = useState({
        buktiPembayaran: "",
      })

    function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value
    setValues(values => ({
        ...values,
        [key]: value,
    }))
    }

    function handleSubmit(e) {
    e.preventDefault()
    Inertia.post('/transaction/upload_payment_proof', values)
    }

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
                <form onSubmit={handleSubmit}>
                    <label>Upload Bukti Pembayaran</label>
                    <input type="file" id="buktiPembayaran" value={values.buktiPembayaran} onChange={handleChange}/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </App>
    );
}

export default TransactionDetail;
