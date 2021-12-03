import {useState, useEffect} from 'react'
import { usePage } from '@inertiajs/inertia-react'
import App from '../../Layouts/App'
import { Inertia } from '@inertiajs/inertia'


const Create = (props) => {
    const { product } = usePage().props;

    const [productColor, setProductColor] = useState(product.colors[0]);
    const [productSize, setProductSize] = useState(product.sizes[0]);

    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
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
        Inertia.post(`/create_review/${product.id}`, {cartItems:cartItems, ongkir: ongkir, kurir: kurir});
        // Inertia.post('/users', values)
    }

    const submit=()=>{
        Inertia.post(`/create_review/${product.id}`, {cartItems:cartItems, ongkir: ongkir, kurir: kurir});
    }

    return (
        <App>
            <h1>Give your testimonial!</h1>
            <h1>{product.nama}</h1>
            <img src={`/storage/${productColor.image}`} width="300" className="vertical-center"/>
            <p>Ratings</p>
            <label>Testimonial</label>
            <input type="textarea" name="testimonial"/>
            <p>Are you recommend this product?</p>
            <input type="radio" id="yes" name="is_recommended" value="yes"/>
            <label for="yes">Yes</label>
            <input type="radio" id="no" name="is_recommended" value="no"/>
            <label for="no">No</label>
            <button className="btn btn-primary" onClick={submit}>Submit</button>


        </App>
    );
};

export default Create;
