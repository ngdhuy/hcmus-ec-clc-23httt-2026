import React from "react"
import { Link } from "react-router-dom"

import "./style.css"

export const NavBar: React.FC = () => {
    return (
        <ul className="nav">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/products">Product</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    )
}