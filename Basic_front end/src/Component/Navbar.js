import React from "react";
import logo from "../assent/11.jpg"


function Navbar() {
    return (
        <div className="Navbar">
            <div className="left_side">
                <img src={logo} />
            </div>
            <div className="right_side"></div>
        </div>
    )
}

export default Navbar;