import React from "react"
import Layout from "../components/Layout"
import ProNav from "../components/ProNav"
import Footer from "../components/Footer"
import vector from "../images/vector.png"
import Cloud from "../images/Cloud.png"
import dollar from "../images/dollar.png"
import shield from "../images/shield.png"
import triangle from "../images/triangle.png"
import option1 from "../images/option1.png"
import option2 from "../images/option2.png"
import option3 from "../images/option3.png"
import building from "../images/building.png"
import company from "../images/company.png"
import pencil from "../images/pencil.png"
import union from "../images/union.png"
import colorShift from "../images/colorShift.png"

export default () => (
    <div className="proContainer">
    <img className="vector" src={vector} alt="vector"/>
    <Layout>
        <ProNav/>
        <p className="title">
            Datastak Direct
        </p>
        <h1>
            Simple, subscription-based support for open source Apache Cassandra™ from the Cassandra experts.
        </h1>
        <div className="col">
            <div className="keep">
                Keep critical database applications online.
            </div>
            <div className="description">
                DataStax Direct provides you with cost-effective database support options that help you guarantee application uptime by making sure your database meets performance and availability requirements.
            </div>
        </div>

        <div className="circle">
        <img className="Cloud" src={Cloud} alt="Cloud"/>
        </div>

        <div className="toolsContainer">
            <div className="dollarContainer">
                <div className="cirDollar">
                    <img className="dollar" src={dollar} alt="dollar"/>
                </div>
                <div className="dollarHead">
                    Flexible pricing model
                </div>
                <div className="dollarBody">
                    Choose the support that's right for your technical and buisness needs. Then easily scale at any time through self-service portal.
                </div>
            </div>
            <div className="shieldContainer">
                <div className="cirShield">
                    <img className="shield" src={shield} alt="shield"/>
                </div>
                <div className="shieldHead">
                    Peace of mind from Cassandra experts
                </div>
                <div className="shieldBody">
                    Get support directly from the distributed database experts who authored a majority of the Cassandra code.
                </div>
            </div>
            <div className="triContainer">
                <div className="cirTriangle">
                    <img className="triangle" src={triangle} alt="triangle"/>
                </div>
                <div className="triangleHead">
                Next-generation perf-ormance monitoring
                </div>
                <div className="triangleBody">
                Accelerate troubleshooting with click-through discovery and simplify performance tuning with AI-powered analysis and recommendations.
                </div>
            </div>
        </div>

        <marquee className="bigMarquee" behavior="scroll" direction="left">Designed to fit your needs</marquee>
        <div className="promise">
            DataStax has you covered with subscription-based support plans designed to fit your business and technical needs - all without contracts or cancellation fees.
        </div>
        <div className="optionContainer">
        <img className="colorShift" src={colorShift} alt="colorShift"/>
            <div className="buildingBox">
                <img className="option1" src={option1} alt="option1"/>
                <div className="cirRing1">
                    <div className="buildingCir">
                        <img className="building" src={building} alt="building"/>
                    </div>
                </div>
                <div className="buildingHead">
                    Standard
                </div>
                <div className="buildingBody">
                An excellent choice for companies who are looking for standard 8x5 or 24x7 support for open source Cassandra1. Starting from $100/node/month.
                </div>
                <div className="expand1">
                    <img className="union" src={union} alt="union" />
                    Expand Details
                </div>
                <button className="buildingBut snipcart-add-item"
                data-item-id="1"
                data-item-price="1,000.00"
                data-item-url="/images/building"
                data-item-name="Standard">
                    Get started
                </button>
            </div>

            <div className="companyBox">
                <img className="option2" src={option2} alt="option2"/>
                <div className="cirRing2">
                    <div className="companyCir">
                        <img className="company" src={company} alt="company"/>
                    </div>
                </div>
                <div className="companyHead">
                Enterprise
                </div>
                <div className="companyBody">
                Curabitur vitae nulla suscipit, tincidunt magna in, consequat ipsum. Morbi lacus ex, vehicula ut elementum eu, pellentesque sit amet urna.
                </div>
                <div className="expand2">
                    <img className="union" src={union} alt="union" />
                    Expand Details
                </div>
                <button className="companyBut snipcart-add-item"
                data-item-id="2"
                data-item-price="100,000.00"
                data-item-url="/images/building"
                data-item-name="company">
                    Get started
                </button>
            </div>

            <div className="pencilBox">
                <img className="option3" src={option3} alt="option3"/>
                <div className="cirRing3">
                    <div className="pencilCir">
                        <img className="pencil" src={pencil} alt="pencil"/>
                    </div>
                </div>
                <div className="pencilHead">
                    Custom
                </div>
                <div className="pencilBody">
                For companies with unique requirements or large-scale deployments, custom support plans are also available. Contact us to learn more about custom plans.
                </div>
                <div className="expand3">
                    <img className="union" src={union} alt="union" />
                    Expand Details
                </div>
                <button className="pencilBut snipcart-add-item"
                data-item-id="3"
                data-item-price="1000.00"
                data-item-url="/images/pencil"
                data-item-name="Custom">
                    Let's talk
                </button>
            </div>
        </div>
        
        <div className="lastState">
        <div className="supportPlan">
            Ready for a different kind of support plan?
        </div>
        <div className="peace">
            Get the peace of mind you need plus the performance and uptime your applications require with subscription-based support options from the Cassandra experts.
        </div>
        <button className="supportBut">
            Get support today
        </button>
        </div>
        <Footer/>
    </Layout>
        
    </div>
)


