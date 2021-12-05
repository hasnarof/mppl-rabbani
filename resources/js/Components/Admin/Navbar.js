import React from 'react';
import { usePage } from '@inertiajs/inertia-react';

const Navbar = () => {
    const { auth } = usePage().props;

    console.log(auth);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light shadow-sm p-3 mb-5 bg-body rounded fixed-top">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        <img src={`/img/logo_rabbani.png`} width="115" alt="logo" className="d-inline-block align-middle mr-2"/>
                    </a>
                    {auth.user == null && <p className="text-white">User tidak login</p>}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/products">EXPLORE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/admin/transactions">TRANSACTION</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
