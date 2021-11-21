import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (

        <>
            <nav>
                <h4>Node MySQL</h4>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/login">Login</Link>
                    </li>
                    <li>
                    <Link to="/register">Register</Link>
                    </li>

                </ul>
            </nav>

        </>

    )
}

export default Navbar;