import React from 'react'
import { Link } from 'gatsby'
import datastax from "../images/datastax.jpg"

const ProNav = () => {
    return (
    <div className="vector8+">
            <nav className="proHeader">
            <img className="logo" src={datastax} alt="Logo" />
            <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.15/default/snipcart.css" />
                <div hidden id="snipcart" 
                data-api-key="YzU2ODE2NDQtOGY4NC00ODc5LWFjNzMtOTNmMDNmYTQyNDkxNjM3Mjg0MzcxMDY5NTU5Mzk2">
                </div>
                <script src="https://cdn.snipcart.com/themes/v3.0.15/default/snipcart.js"></script>
                <Link to="index">Back to www.datastax.com</Link>
            </nav>
        </div>
    )
}



export default ProNav