import React from 'react'
import { Col, Container, Image, Row } from "react-bootstrap";
import benefitsckm from "@/app/data/benefitsckm";
import * as HiIcons from "react-icons/hi"
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"
import * as RiIcons from "react-icons/ri"
import * as ImIcons from "react-icons/im"
import * as GiIcons from "react-icons/gi"

const { bg, title, tagline, benefits1, benefits, benefits2 } = benefitsckm;

function WhatWeDoLG({ className = "" }) {
  return (
    <>


      <section className="BenefitsLGContainer">
        <div
          className="counter-one-pattern"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <div className='container'>
          <h1 className="titleHeadPPC"> WHAT WE DO?</h1>
          <div className="boxContainerMainLG12">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12 led-new">
                <HiIcons.HiDocument className="Lgicons" />
                <h1>Content Marketing</h1>
                <p>Create content that attract attention</p>
              </div>
              <div className="col-lg-4 col-md-4 col-12 led-new">
                <ImIcons.ImTree className="Lgicons" />
                <h1>Link Building</h1>
                <p>Let search engines know about your website</p>
              </div>
              <div className="col-lg-4 col-md-4 col-12 led-new">
                <FaIcons.FaUser className="Lgicons" />
                <h1>Competitive Research</h1>
                <p>Find the strengths and weaknesses of current and potential competitors</p>
              </div>
              <div className="col-lg-4 col-md-4 col-12 led-new">
                <ImIcons.ImTree className="Lgicons" />
                <h1>On-page SEO</h1>
                <p>Optimization of HTML code and page content</p>
              </div>
              <div className="col-lg-4 col-md-4 col-12 led-new">
                <GiIcons.GiTrophyCup className="Lgicons" />
                <h1>Local Fame</h1>
                <p>Press-releases and links at all local directories and forums</p>
              </div>
              <div className="col-lg-4 col-md-4 col-12 led-new">
                <FaIcons.FaUser className="Lgicons" />
                <h1>Conversion Optimization</h1>
                <p>Increasing conversion of the percentage of visitors into customers</p>
              </div>
            </div>
            {/* <div className="boxContainerLG1">
                 
                </div>
                 <div className="boxContainerLG2">
               
                </div>
                 <div className="boxContainerLG3">
                 
                </div>
                <div className="boxContainerLG4"> */}

            {/* <p>Our best result – up to 50% of the customer revenue through SEO</p> */}
            {/* </div>
                 <div className="boxContainerLG5">
                  */}
            {/* <p>You get your marketing budget paid back within few months of digital advertising.</p> */}
            {/* </div>
                 <div className="boxContainerLG6"> */}

            {/* <p>Increase in website visitior by 5% for our clients</p> */}
            {/* </div> */}
          </div>
        </div>
      </section>

    </>
  )
}
export default WhatWeDoLG