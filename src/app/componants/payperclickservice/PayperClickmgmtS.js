import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import * as BsIcons from "react-icons/bs"
import * as FaIcons from "react-icons/fa"
import * as HiIcons from "react-icons/hi"
function PayperClickmgmtS() {
  return (
    <>
      <section className="PPCmgmtSer-page">
        <div className="container">
          <div className="BoxPPCmgmtMain">
            <div className="BoxPPCmgmtSer1">
              {/* <div className="CirclePPCmgmtSer1"> */}
                <BsIcons.BsEmojiSmile className="icons ppc-icons" />
              {/* </div> */}
              <p>We conduct an audit of Ad campaigns and website</p>
            </div>
            <div className="BoxPPCmgmtSer1">
              {/* <div className="CirclePPCmgmtSer1"> */}
                <HiIcons.HiChartSquareBar className="icons ppc-icons" />
              {/* </div> */}
              <p>We provide analytics reports</p>
            </div>
            <div className="BoxPPCmgmtSer1">
              {/* <div className="CirclePPCmgmtSer1"> */}
                <BsIcons.BsTelephoneFill className="icons ppc-icons" />
              {/* </div> */}
              <p>Increase in leads and enquiry</p>
            </div>
            <div className="BoxPPCmgmtSer1">
              {/* <div className="CirclePPCmgmtSer1"> */}
                <FaIcons.FaMedal className="icons ppc-icons" />
              {/* </div> */}
              <p>Reduction in the average cost of clicks and customers</p>
            </div>
          </div>
          <div className="boxTextPPCmgmtSer">
            <h1>We consider the work done when your desired ROI is achieved</h1>
            
          </div>

          <Button className="BtnPPCmgmtSer">Start profitable advertising campaign now!</Button>
        </div>
      </section>
    </>
  )
}

export default PayperClickmgmtS
