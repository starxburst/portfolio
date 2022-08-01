import React from "react";
import '../styles/Navbar.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li href="#">Home</li>
                <a href="#aboutContainer">About</a>
                <li href="#">Project</li>
            </ul>
        </nav>
    )
}

export default Navbar;