import React from 'react';

//navbar page home
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light shadow-sm p-3 mb-5 bg-body rounded fixed-top">
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
                            <li class="nav-item">
                                <a class="nav-link" href="#">TRANSACTION</a>
                            </li>
                        </ul>

                        {/* <!-- Right Side Of Navbar --> */}
                        <ul id="btn-login-regis" class="navbar-nav ml-auto">
                            {/* <!-- Authentication Links masih belommmm --> */}
                            <li class="nav-item">
                                <a class="nav-link btn btn-primary mx-2 rounded-pill" href="/login">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link btn btn-primary rounded-pill" href="/register">Register</a>
                            </li>
                        </ul>
                    </div>
                </div> 
            </nav>
        </div>
    );
};

export default Navbar;
