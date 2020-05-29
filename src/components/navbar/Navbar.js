import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top">
                <img className="navbar-brand" src="./images/bus-logo-6.png" height="100%" width="100" />
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{color:"#ffffff"}}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" style={{ color: "whitesmoke" }} href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{ color: "whitesmoke" }} href="#">My Bookings</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{ color: "whitesmoke" }} href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{ color: "whitesmoke" }} href="#">Work With Us</a>
                        </li>
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                        <button style={{ backgroundColor: '#ffffff' }} className="btn  my-sm-0" type="submit">Login</button>
                    </form>
                    <form className="form-inline my-2 my-lg-0">
                        <button style={{ backgroundColor: '#FFD700', color: '#000000', }} className="btn  my-sm-0" type="submit">Sign
                    up</button>
                    </form> */}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;