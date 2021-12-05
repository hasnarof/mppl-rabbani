import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from '@inertiajs/inertia';
import AppAdmin from "../../../Layouts/AppAdmin";

const Products = () => {
    const {all_products} = usePage().props;
    console.log(all_products)

    function handleSubmit(productId) {
        Inertia.post(`/admin/products/destroy`, {productId: productId});
    }
    return (
        <AppAdmin>
            <div id="product-admin" className="container card">
                <h1>All Products</h1>
                <div className="table-responsive">
                    <table className="table align-middle">
                        <thead>
                            <tr scope="row">
                                <th>Picture</th>
                                <th>Name</th>
                                <th colspan="1">Color</th>
                                <th>Size</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {all_products.map((item, index)=>(
                                <tr scope="row">
                                    <td>
                                        <img src={`/storage/${item.colors[0].image}`} width="150"/>
                                    </td>
                                    <td >{item.nama}</td>
                                    <td colspan="1">{item.colors.map((child, i)=>(<span>{child.warna}, </span>))}</td>
                                    <td>{item.sizes.map((child, i)=>(<span>{child.ukuran}, </span>))}</td>
                                    <td>{item.kategori_pakaian}</td>
                                    <td className="text-end">Rp {(item.colors[0].harga/1000).toFixed(3)}</td>
                                    <td id="btn-product-admin">
                                        <Link href={`/product/${item.id}`} className="btn btn-primary rounded-pill">Detail</Link>
                                        <Link href={`/admin/edit_product/${item.id}`} className="btn btn-primary rounded-pill">Edit</Link>
                                        <button onClick={()=>handleSubmit(item.id)} className="btn btn-primary rounded-pill">Delete</button>
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

export default Products;
