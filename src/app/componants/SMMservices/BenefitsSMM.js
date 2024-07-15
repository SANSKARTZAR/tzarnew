import React from 'react'
import { Col, Container, Image, Row } from "react-bootstrap";
// import Title from "../Reuseable/Title";
import benefitsckm from "@/app/data/benefitsckm";
import * as HiIcons from "react-icons/hi" 
import * as AiIcons from "react-icons/ai" 
import * as FaIcons from "react-icons/fa" 
import * as BsIcons from "react-icons/bs" 
import * as MdIcons from "react-icons/md" 

const { bg, title, tagline, benefits1, benefits , benefits2   } = benefitsckm;

function BenefitsSMM  ({ className = "" }) {
  return (
    <>
      <section className="BenefitsSMMContainer">
      <div
          className="counter-one-pattern"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <h1 className="titleHeadSMM"> BENEFITS FOR YOUR BUSINESS</h1>
        <div  className="container card-boxsmm">
          <div className="row">
            <div className='col-lg-6'>
                <div className="boxContainerSMMnew">
                 <HiIcons.HiShare className="smmicons" />
                 <div>
                 <h1>Increases brand awareness</h1>
                 <p>Company’s image or Brand creation using the multimedia capabilities of social networking</p>
                </div></div>
            </div>
            <div className='col-lg-6'>
                 <div className="boxContainerSMMnew">
                 <BsIcons.BsFillHeartFill className="smmicons" />
                 <div>
                  <h1>Increases audience loyalty</h1>
                  <p>Formation of user confidence in the brand, product, company, achieved through interaction within the social network</p>
                </div></div>
            </div>
            <div className='col-lg-6'>
                 <div className="boxContainerSMMnew">
                  <MdIcons.MdFeedback className="smmicons" />
                  <div>
                  <h1>Feedback</h1>
                  <p>SMO allows you to get feedback from potential and real customers to improve the quality of your services</p>
                </div>
                </div>
            </div>
            <div className='col-lg-6'>
                 <div className="boxContainerSMMnew">
                  <MdIcons.MdPeopleAlt className="smmicons" />
                  <div>
                  <h1>Base of potential customers</h1>
                  <p>SMO allows you to build a base of potential customers for further conversion into real customers</p>
                </div></div>
            </div>
          </div>
          
        </div>
    </section>
 
    </>
  )
}
export default BenefitsSMM