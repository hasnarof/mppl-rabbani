import React from 'react';
import { usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBell, faComment } from '@fortawesome/free-solid-svg-icons'



//navbar page home
const Navbar = (props) => {
    const { auth, csrfToken } = usePage().props;
    const {setCartOpen} = props;

    const handleSubmit=()=>{
        Inertia.post('/logout', {
            _token: csrfToken,
        })
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light shadow-sm p-3 mb-5 bg-body fixed-top">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        <img src={`/img/logo_rabbani.png`} width="115" alt="logo" className="d-inline-block align-middle mr-2"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/products">EXPLORE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/transactions">TRANSACTION</a>
                            </li>
                        </ul>

                        {/* <!-- Right Side Of Navbar --> */}
                        <div id="navbar-icon">
                            <a href="/chatify">
                                <FontAwesomeIcon icon={faComment} size="lg" className="m-2"></FontAwesomeIcon>
                            </a>
                            <a href="/notifications">
                                <FontAwesomeIcon icon={faBell} size="lg" className="m-2"></FontAwesomeIcon>
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faShoppingCart} size="lg" className="ms-2 mb-2 mt-2" onClick={()=>setCartOpen(true)}></FontAwesomeIcon>
                            </a>
                        </div>
                        <ul id="btn-login-regis" className="">
                            {/* <!-- Authentication Links --> */}
                            {auth.user == null ?
                            <div className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <a className="nav-link btn btn-primary mx-2 rounded-pill" href="/login">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn btn-primary rounded-pill" href="/register">Register</a>
                                </li>
                            </div>
                            :
                            <div className="nav-item dropdown">
                                <a id="navbarDropdown" className="nav-link text-reset dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                    {auth.user.name}
                                </a>

                                <div id="btn-logout" className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a onClick={handleSubmit} href="#" className="dropdown-item">
                                    Logout
                                    </a>
                                </div>
                            </div>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
