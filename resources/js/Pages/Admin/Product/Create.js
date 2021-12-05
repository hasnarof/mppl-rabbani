import {useState, useEffect} from 'react'
import { usePage } from '@inertiajs/inertia-react'
import AppAdmin from '../../../Layouts/AppAdmin'
import { Inertia } from '@inertiajs/inertia'

const Create = (props) => {

    const [values, setValues] = useState({
        name: "",
        product_category: "",
        gender_category: "",
        price: "",
        size: "",
        colors: [],
        description: "",
        files: [],
    })

    const [files, setFiles] = useState([]);

    function handleFileChange(e, index){
        let file = e.target.files[0];
        let array = files;
        if(array[index] == undefined) {
            array.push(file);
        } else {
            array[index] = file;
        }
        setFiles(array);
    }

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
        Inertia.post(`/admin/create_product`, {form: values, files: files, colorsSize: colorsIndex});
    }

    const [colorsIndex, setColorsIndex] = useState(0);
    const [colorsArray, setColorsArray] = useState([]);
    function addColor(){
        setColorsArray([...colorsArray, colorsIndex]);
        setColorsIndex(colorsIndex+1);

        console.log(colorsIndex,colorsArray);


    }
    function removeColor(){
        let array = [...colorsArray];
        array.splice(colorsIndex-1, 1);
        setColorsArray(array);
        let array2 = [...files];
        array2.splice(colorsIndex-1, 1);
        setFiles(array2);
        setColorsIndex(colorsIndex-1);

        console.log(colorsIndex,colorsArray);
    }


    return (
        <AppAdmin>
            <div id="create-produk" className="background-color">
                <div className="container">
                    <div className="card">
                        <h1>Create Product</h1>
                        <div className="row">
                            <div className="col">
                                <form onSubmit={handleSubmit}>
                                    <div className="detail">
                                        <label htmlFor="name">Product Name</label>
                                        <br></br>
                                        <input id="name" value={values.name} onChange={handleChange} />
                                        <br></br>
                                    </div>
                                    <div className="detail">
                                        <label htmlFor="product_category">Product Category</label>
                                        <br></br>
                                        <input id="product_category" value={values.product_category} onChange={handleChange} />
                                        <br></br>
                                    </div>
                                    <div className="detail">
                                        <label htmlFor="gender_category">Gender Category</label>
                                        <br></br>
                                        <input id="gender_category" value={values.gender_category} onChange={handleChange} />
                                        <br></br>
                                    </div>
                                    <div className="detail">
                                        <label htmlFor="price">Price</label>
                                        <br></br>
                                        <input id="price" value={values.price} onChange={handleChange} />
                                        <br></br>
                                    </div>
                                    <div className="detail">
                                        <label htmlFor="size">Size Variance</label>
                                        <br></br>
                                        <input id="size" value={values.size} onChange={handleChange} />
                                        <br></br>
                                    </div>
                                    <div className="detail">
                                        <h5>Color Variance</h5>
                                        <button type="button" className="btn btn-primary" onClick={addColor}>+</button>
                                        <br></br>
                                        {colorsArray.map((index)=>(
                                            <div className="card shadow">
                                                <label htmlFor={`color-${index}`}>Color #{index + 1}</label>
                                                <input id={`color-${index}`} value={values.colors[index]} onChange={handleChange} />

                                                <br></br>
                                                <input type="file" value={undefined} name="file" onChange={e => handleFileChange(e, index)} />
                                                {index == colorsIndex-1 && <button type="button" className="btn btn-danger rounded-pill" onClick={removeColor}>Delete</button>}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="detail">
                                        <label htmlFor="description">Description</label>
                                        <br></br>
                                        <input type="textarea" id="description" value={values.description} onChange={handleChange} />
                                        <br></br>
                                    </div>
                                    <div className="detail full">
                                        <button className="btn btn-primary rounded-pill" onClick={handleSubmit}>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppAdmin>
    );
};

export default Create;
