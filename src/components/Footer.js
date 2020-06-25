import React from 'react'
import footerLogo from "../images/footerLogo.svg"

const Footer = () => {
    return (
        <div className="footerBck">
            <div className="footerHead">
                <img className="footerLogo" src={footerLogo} alt="footerLogo"/>
            </div>
            <div className="footContainer">
                <div className="footLink">
                    Resources Company Academy 
                </div>
                <div className="contact">
                Contact Us
                </div>
                <div className="footerNum">
                    +1(650)389-6000
                </div>
                <div className="email">
                    info@datastax.com
                </div>
                <div className="documents">
                © 2019 DataStax     |    Privacy Policy   |   Terms of Use    |  Sitemap            
                </div>
                <p>
                    ________________________________________________________________________________________________________________________________________________________________
                </p>
                <div className="trademark">
                DataStax, Titan, and TitanDB are registered trademarks of DataStax, Inc. and its subsidiaries in the United States and/or other countries.
                </div>
                <div className="names">
                Apache, Apache Cassandra, Cassandra, Apache Tomcat, Tomcat, Apache Lucene, Lucene, Apache Solr, Apache Hadoop, Hadoop, Apache Spark, Spark, Apache TinkerPop, TinkerPop, Apache Kafka and Kafka are either registered trademarks or trademarks of the Apache Software Foundation or its subsidiaries in Canada, the United States and/or other countries. Kubernetes is the registered trademark of the Linux Foundation.
                </div>
            </div>
        </div>
    )
}

export default Footer
