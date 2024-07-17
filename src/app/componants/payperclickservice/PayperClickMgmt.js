import React from 'react'
import { Col, Container, Image, Row } from "react-bootstrap";
import payperclick from '@/app/data/payperclick';
import ppcmgmt1 from "@/assets/images/resources/PPcMgmt/1.png"
import ppcmgmt2 from "@/assets/images/resources/PPcMgmt/2.png"
import ppcmgmt3 from "@/assets/images/resources/PPcMgmt/3.png"
import ppcmgmt4 from "@/assets/images/resources/PPcMgmt/4.png"
import ppcmgmt5 from "@/assets/images/resources/PPcMgmt/5.png"
import ppcmgmt6 from "@/assets/images/resources/PPcMgmt/6.png"


const { HeadTitle,title1, subtitle1, title2, subtitle2, title3, subtitle3, title4, subtitle4, title5, subtitle5, title6, subtitle6, tagline, ppcmgmt} = payperclick ;

function PayperClickMgmt({ className = "" }) {
  return (
    <>
    

      <section className="PPCmgmt-page">
        <div className="container">
           <h1>{HeadTitle}</h1>
           <div className="BoxPPCmgmtCMain">
             <div className="BoxPPCmgmt1">
               <div className="Iconsppcmgmt">
               <Image
                  src={ppcmgmt1.src}
                 alt=""
                />
                </div>
                <h3 className="PPCmgmt__text">{title1}</h3>
                <p className="PPCmgmt__text1">{subtitle1}</p>
             </div>
             <div className="BoxPPCmgmt1">
            <div className="Iconsppcmgmt">
               <Image
                  src={ppcmgmt2.src}
                 alt=""
                />
                </div>
              <h3 className="PPCmgmt__text">{title2}</h3>
              <p className="PPCmgmt__text1">{subtitle2}</p>
         
             </div>
             <div className="BoxPPCmgmt1">
                <div className="Iconsppcmgmt">
                  <Image
                      src={ppcmgmt3.src}
                    alt=""
                    />
                </div>
              <h3 className="PPCmgmt__text">{title3}</h3>
              <p className="PPCmgmt__text1">{subtitle3}</p>
             </div>
             <div className="BoxPPCmgmt1">
                <div className="Iconsppcmgmt">
                      <Image
                          src={ppcmgmt4.src}
                        alt=""
                        />
                </div>
                <h3 className="PPCmgmt__text">{title4}</h3>
                <p className="PPCmgmt__text1">{subtitle4}</p>
             </div>
             <div className="BoxPPCmgmt1">
              <div className="Iconsppcmgmt">
                      <Image
                          src={ppcmgmt5.src}
                        alt=""
                        />
                </div>
              <h3 className="PPCmgmt__text">{title5}</h3>
              <p className="PPCmgmt__text1">{subtitle5}</p>
         
             </div>
             <div className="BoxPPCmgmt1">
                  <div className="Iconsppcmgmt">
                          <Image
                              src={ppcmgmt6.src}
                            alt=""
                            />
                    </div>
                  <h3 className="PPCmgmt__text">{title6}</h3>
                  <p className="PPCmgmt__text1">{subtitle6}</p>
             </div>
           </div>
        </div>
    </section>



    </>
  )
}

export default PayperClickMgmt
