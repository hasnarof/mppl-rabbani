import {useState, useEffect} from 'react'
import { usePage } from '@inertiajs/inertia-react'
import AppAdmin from '../../../Layouts/AppAdmin'
import { Inertia } from '@inertiajs/inertia'

const Create = (props) => {

    const [values, setValues] = useState({
        name: "",
        category: "",
        price: "",
        size: "",
        description: "",
        files: [],
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
        // let form = $('#createProduct').serialize();
        Inertia.post(`/admin/create_product`, values);
    }

    const [colorsIndex, setColorsIndex] = useState(0);
    const [colorsArray, setColorsArray] = useState([]);
    const addColor=()=>{
        setValues(...values, values.files[colorsIndex] = undefined);
        setColorsIndex(colorsIndex+1);
        setColorsArray([...colorsArray, colorsIndex]);

    }
    const removeColor=(id)=>{
        let array = [...colorsArray];
        array.splice(colorsIndex, 1);
        setColorsArray(array);
        setColorsIndex(colorsIndex-1);
    }


    return (
        <AppAdmin>
            <div>
                <div className="container">
                    <h1>Create Product</h1>
                    <div className="row">
                        <div className="col">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name">Product Name</label>
                                <input id="name" value={values.name} onChange={handleChange} />
                                <br></br>
                                <label htmlFor="category">Product Category</label>
                                <input id="category" value={values.category} onChange={handleChange} />
                                <br></br>

                                <label htmlFor="price">Price</label>
                                <input id="price" value={values.price} onChange={handleChange} />
                                <br></br>

                                <label htmlFor="size">Size Variance</label>
                                <input id="size" value={values.size} onChange={handleChange} />
                                <br></br>

                                <h5>Color Variance</h5>
                                <button type="button" className="btn btn-primary" onClick={addColor}>+</button>
                                <br></br>
                                {colorsArray.map((index)=>(
                                    <div className="card shadow">
                                        <label htmlFor={`color-${index}`}>Color #{index + 1}</label>
                                        <input id={`color-${index}`} value={values.colors[index]} onChange={handleChange} />

                                        <br></br>
                                        <input type="file" value={undefined} onChange={e => setData(`values.files[${index}]`, e.target.files[0])}/>
                                    </div>
                                ))}

                                <label htmlFor="description">Description</label>
                                <input type="textarea" id="description" value={values.description} onChange={handleChange} />
                                <br></br>

                                <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AppAdmin>
    );
};

export default Create;
