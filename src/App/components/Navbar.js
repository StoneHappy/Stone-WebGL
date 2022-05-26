import React from "react";
import airbnblogo from "../../Assets/images/airbnb-logo.png"

export default function Navbar()
{
    return (
        <nav>
            <img src={airbnblogo} className="nav--logo"></img>
        </nav>
    )
}