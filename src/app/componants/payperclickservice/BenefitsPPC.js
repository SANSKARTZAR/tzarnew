import React from 'react'
import { Col, Container, Image, Row } from "react-bootstrap";
import benefitsckm from "@/app/data/benefitsckm";
import * as HiIcons from "react-icons/hi"
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"
import * as GiIcons from "react-icons/gi"
import * as ImIcons from "react-icons/im"

const { bg, title, tagline, benefits1, benefits, benefits2 } = benefitsckm;

function BenefitsPPC({ className = "" }) {
  return (
    <>

      <section className="BenefitsPPCContainer">
        <div className="container">
          <div
            className="counter-one-pattern"
            style={{ backgroundImage: `url(${bg.src})` }}
          ></div>

          <h1 className="titleHeadPPC"> Benefits</h1>
          <br/>
          <div className="boxContainerMainPPC1">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="boxContainerPPC1">
                  <ImIcons.ImTree className="ppcicons" />
                  <h1>Successful advertising campaign</h1>
                  {/* <p>Our best result – up to 50% of the customer revenue through SEO</p> */}
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="boxContainerPPC1">
                  <GiIcons.GiTrophyCup className="ppcicons" />
                  <h1>Improvment in CTR with Google Adwords</h1>
                  {/* <p>You get your marketing budget paid back within few months of digital advertising.</p> */}
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="boxContainerPPC1">
                  <FaIcons.FaUser className="ppcicons" />
                  <h1>Reduce the cost of the customer by at least 21%</h1>
                  {/* <p>Increase in website visitior by 5% for our clients</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default BenefitsPPC