import React from 'react'
import { Col, Container, Image, Row } from "react-bootstrap";
import benefitsckm from "@/app/data/benefitsckm";
import * as HiIcons from "react-icons/hi" 
import * as AiIcons from "react-icons/ai" 
import * as FaIcons from "react-icons/fa" 


const { bg, title, tagline, benefits1, benefits , benefits2   } = benefitsckm;

function BenefitsCKM({ className = "" }) {
  return (
    <>
      <section className="BenefitsCKMContainer">

        <h1 className="titleHeadCKm"> Benefits</h1>
        <div
          className="counter-one-pattern"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <Container>
          <div className="boxContainerCKMain">
                <div className="boxContainerCk">
                 <HiIcons.HiChartBar className="bcmkicons" />
                 <h1>50% of sales</h1>
                 <p>We help in increasing revenue by up to 50%</p>
                </div>
                 <div className="boxContainerCk">
                  <FaIcons.FaRegNewspaper className="bcmkicons" />
                  <h1>Payback in 2-3 months</h1>
                  <p>You get your marketing budget paid back within few months of digital advertising.</p>
                </div>
                 <div className="boxContainerCk">
                  <AiIcons.AiOutlineMail className="bcmkicons" />
                  <h1>30% Traffic Increase</h1>
                  <p>With your social media techniques your engagement goes up by 30%</p>
                </div>
                 <div className="boxContainerCk">
                  <HiIcons.HiChartBar className="bcmkicons" />
                  <h1>60% of repeat sales</h1>
                  <p>The highest rate for repeat sales through personalized offers and its series of reminders</p>
                </div>
                 <div className="boxContainerCk">
                  <HiIcons.HiUserGroup className="bcmkicons" />
                  <h1>Customers stay with you for a long time</h1>
                  <p>You are 2-3 times longer communicating with your clients, respectively purchases also 2-3 times more</p>
                </div>
                 <div className="boxContainerCk">
                  <FaIcons.FaMoneyBillAlt className="bcmkicons" />
                  <h1>At 3-5 times more money from the customer</h1>
                  <p>A customer brings in an average of 3-5 times more money by staying loyal customer forever</p>
                </div>
          </div>
        </Container>
    </section>
 
    </>
  )
}
export default BenefitsCKM