import React from "react";
import '../styles/Navbar.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li href="#">Home</li>
                <li href="#">About</li>
                <li href="#">Project</li>
                <li href="#">Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;