import React from 'react';
import logo from '../../../public/img/logo_rabbani.png';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light shadow-sm p-3 mb-5 bg-body rounded">
                <div className="container">
                    <a href="/" className="navbar-brand">
                    {/* <!-- Logo Image --> */}
                        <img src="{logo}" width="115" alt="logo" className="d-inline-block align-middle mr-2"/>
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
                                <a className="nav-link" href="#">EXPLORE</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">TRANSACTION</a>
                            </li>
                        </ul>
                    </div>
                </div> 
            </nav>
        </div>
    );
};

export default Navbar;
