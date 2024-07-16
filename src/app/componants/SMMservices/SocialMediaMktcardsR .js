
import React from 'react'
import { Col, Container, Image, Row } from "react-bootstrap";
import smmcard from '@/app/data/smmcard';
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";
import * as GoIcons from "react-icons/go";
import * as RiIcons from "react-icons/ri";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";


const { HeadTitle, title1, subtitle1, title2, subtitle2, title3, subtitle3, title4, subtitle4,
  title5, subtitle5, title6, title7, title8, title9, title10, subtitle6, subtitle7, subtitle8,
  subtitle9, subtitle10, tagline, text2, ppSmmgmt } = smmcard;

function SocialMediaMktcardsR({ className = "" }) {
  return (
    <>
      <section className="SMMCards-page">
        <div className="container-fluid">
          <div className="mainSmm">
            <h1>{HeadTitle}</h1>
            <p>{text2}</p>
            <div className='card-boxsmm'>
              <div className='row'>
                <div className="col-lg-2 col-md-4 col-12">
                  <div className="cardSmm">
                    <MdIcons.MdPeople className="Smmicons" />
                    <h3 className="SmmsGoals__text">{title1}</h3>
                    <p className="SmmsGoals__text1">{subtitle1}</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-12">
                  <div className="cardSmm">
                    <GoIcons.GoLocation className="Smmicons" />
                    <h3 className="SmmsGoals__text">{title2}</h3>
                    <p className="SmmsGoals__text1">{subtitle2}</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-12">
                  <div className="cardSmm">
                    <FaIcons.FaSearchLocation className="Smmicons" />
                    <h3 className="SmmsGoals__text">{title3}</h3>
                    <p className="SmmsGoals__text1">{subtitle3}</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-12">
                  <div className="cardSmm">
                    <FiIcons.FiTarget className="Smmicons" />
                    <h3 className="SmmsGoals__text">{title4}</h3>
                    <p className="SmmsGoals__text1">{subtitle4}</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-12">
                  <div className="cardSmm">
                    <MdIcons.MdAnalytics className="Smmicons" />
                    <h3 className="SmmsGoals__text">{title5}</h3>
                    <p className="SmmsGoals__text1">{subtitle5}</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-12">
                  <div className="cardSmm">
                    <RiIcons.RiLiveFill className="Smmicons" />
                    <h3 className="SmmsGoals__text">{title6}</h3>
                    <p className="SmmsGoals__text1">{subtitle6}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <ul className="cardsSmm">
              <li className="cards_itemSmm">
                <div className="cardSmm">
                  <MdIcons.MdPeople className="Smmicons" />
                  <h3 className="SmmsGoals__text">{title1}</h3>
                  <p className="SmmsGoals__text1">{subtitle1}</p>
                </div>
              </li>
              <li className="cards_itemSmm">
                <div className="cardSmm">
                  <GoIcons.GoLocation className="Smmicons" />
                  <h3 className="SmmsGoals__text">{title2}</h3>
                  <p className="SmmsGoals__text2">{subtitle2}</p>
                </div>
              </li>
              <li className="cards_itemSmm">
                <div className="cardSmm">
                  <FaIcons.FaSearchLocation className="Smmicons" />

                  <h3 className="SmmsGoals__text">{title3}</h3>
                  <p className="SmmsGoals__text3">{subtitle3}</p>

                </div>
              </li>
              <li className="cards_itemSmm">
                <div className="cardSmm">
                  <FiIcons.FiTarget className="Smmicons" />
                  <h3 className="SmmsGoals__text">{title4}</h3>
                  <p className="SmmsGoals__text4">{subtitle4}</p>

                </div>
              </li>
              <li className="cards_itemSmm">
                <div className="cardSmm">

                  <MdIcons.MdAnalytics className="Smmicons" />

                  <h3 className="SmmsGoals__text">{title5}</h3>
                  <p className="SmmsGoals__text5">{subtitle5}</p>

                </div>
              </li>
              <li className="cards_itemSmm">
                <div className="cardSmm">
                  <RiIcons.RiLiveFill className="Smmicons" />
                  <h3 className="SmmsGoals__text">{title6}</h3>
                  <p className="SmmsGoals__text6">{subtitle6}</p>

                </div>
              </li>

            </ul> */}
          </div>
        </div>
      </section>

    </>
  )
}

export default SocialMediaMktcardsR; 
