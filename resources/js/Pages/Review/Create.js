import {useState, useEffect} from 'react'
import { usePage } from '@inertiajs/inertia-react'
import App from '../../Layouts/App'
import { Inertia } from '@inertiajs/inertia'
import Rating from 'react-rating'

const Create = (props) => {
    const { product } = usePage().props;

    const [productColor, setProductColor] = useState(product.colors[0]);
    const [productSize, setProductSize] = useState(product.sizes[0]);
    const [rating, setRating] = useState(0) // initial rating value

    function handleSubmit(e) {
        e.preventDefault()
        let form = $('#testimonialForm').serialize();
        Inertia.post(`/create_review/${product.id}`, {product_id: product.id, rating: rating, form: form});
    }


    return (
        <App>
            <div id="create-testi">
                <div className="container">
                    <h1>Give your testimonial!</h1>
                    <div className="row">
                        <div className="col-4">
                            <img src={`/storage/${productColor.image}`} width="300" className="vertical-center"/>
                        </div>
                        <div className="col-6">
                            <h2>{product.nama}</h2>
                            <p>Ratings</p>
                            <div className="rating">
                                <Rating onChange={(value)=>{setRating(value)}}
                                    emptySymbol=// <FontAwesomeIcon icon="fa-solid fa-star-sharp" /> // <span className="fa fa-star"></span> //{[1, 2, 3, 4, 5].map((n) => (
                                    // "far fa-star"
                                    {
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        class="bi bi-star"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                    </svg>
                                    }
                                    fullSymbol={[1, 2, 3, 4, 5].map((n) => (
                                    // <span className="icon-text"></span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="yellow"
                                        class="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    ))}
                                />
                            </div>
                            <form id="testimonialForm" onSubmit={handleSubmit}>
                                <label>Testimonial</label>
                                <br></br>
                                <div className="testi">
                                    <input type="textarea" name="testimonial" className="rounded shadow"/>
                                </div>
                                <div className="rekom">
                                    <p>Are you recommend this product?</p>
                                    <input type="radio" id="yes" name="is_recommended" value="yes"/>
                                    <label for="yes">Yes</label>
                                    <br></br>
                                    <input type="radio" id="no" name="is_recommended" value="no"/>
                                    <label for="no">No</label>
                                </div>
                                <br></br>
                                <div className="text-end">
                                    <button className="btn btn-primary rounded-pill" >Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
};

export default Create;
