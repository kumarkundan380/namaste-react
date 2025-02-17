import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL} alt="Logo Image..." />
            </div>
            <div className="nav-item">
                <ul>
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/about" className="link">About Us</Link></li>
                    <li><Link to="contact" className="link">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnName==="Login"? setBtnName("LogOut") : setBtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>

        </div>
    );
};

export default Header;