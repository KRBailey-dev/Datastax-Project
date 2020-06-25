import React from "react"
import vector8 from "../images/vector8.png"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"

export default () => (
    <div className="Container">
    <img className="vector8" src={vector8} alt="vector8"/>
        <Layout>
            <Navbar/>
            <p className="title">
                Datastak Direct
            </p>
            <h1>
                Simple, subscription-based support for open source Apache Cassandra™ from the Cassandra experts.
            </h1>
        </Layout>
    </div>
)
