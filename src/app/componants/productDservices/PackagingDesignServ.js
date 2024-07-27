import React from 'react';
import * as BiIcons from "react-icons/bi"
import * as SiIcons from "react-icons/si"
import * as MdIcons from "react-icons/md"

import { Col, Container, Image, Row } from "react-bootstrap";
function PackagingDesignServ() {
  return (
    <>

      <section className="PDSContainer">
        <div className="container">
          <h1 className="titleHeadPDS"> Packaging Design Services</h1>
          <div className="boxContainerMainPDS2">
            <div className='row'>
              <div className='col-lg-4 boxcontainericonpds'>
                <BiIcons.BiAnalyse className="PDsicons" />
                <h1 className="PDSHT1">ANALYSIS</h1>
                <p className="PDSPT1">First we analyze your competitors, customers’ expectations for the product and determine the aspects of product being user friendly.</p>
              </div>

              <div className='col-lg-4 boxcontainericonpds'>
                <SiIcons.SiAdobeindesign className="PDsicons" />
                <h1 className="PDSHT1">MATERIAL FRIENDLY DESIGN</h1>
                <p className="PDSPT1">We design your packaging in such a manner that it can go with any material depending upon the product features.</p>

              </div>
              <div className='col-lg-4 boxcontainericonpds'>
                <MdIcons.MdDesignServices className="PDsicons" />
                <h1 className="PDSHT1">DESIGN CREATION</h1>
                <p className="PDSPT1">With all the analyzed information best packaging design is created keeping in mind the usability of product, branding, attention catching and customer friendly.</p>

              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default PackagingDesignServ
