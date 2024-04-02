import React, { useState } from "react";

const Navbar = () => {
    return (
        <nav>
            <div className="nav-logo">
                <p>Logo</p>
                <div className='nav-links'>
                    <a href=''>About</a>
                    <a href=''>Work</a>
                    <a href=''>Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
