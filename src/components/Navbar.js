import React from 'react'
import { Link } from 'gatsby'
import datastax from "../images/datastax.jpg"
import vector8 from "../images/datastax.jpg"

const Navbar = () => {
    return (
    <div className="vector8">
            <nav className="header">
            <img className="logo" src={datastax} alt="Logo" />
                <Link to="solutions">Solutions</Link>
                <Link to="products">Products</Link>
                <Link to="partners">Partners</Link>
                <Link to="resources">Resources</Link>
                <Link to="company">Company</Link>
                <button class="download">Download now</button>
            </nav>
        </div>
    )
}



export default Navbar
