
import React from 'react'
import { Col, Container, Image, Row } from "react-bootstrap";
// import Title from "../Reuseable/Title";
import websiteDevCard from '@/app/data/websiteDevCards';
// import ppcmgmt1 from "../../assets/images/resources/PPcMgmt/1.png"
// import ppcmgmt2 from "../../assets/images/resources/PPcMgmt/2.png"
// import ppcmgmt3 from "../../assets/images/resources/PPcMgmt/3.png"
// import ppcmgmt4 from "../../assets/images/resources/PPcMgmt/4.png"
// import ppcmgmt5 from "../../assets/images/resources/PPcMgmt/5.png"
// import ppcmgmt6 from "../../assets/images/resources/PPcMgmt/6.png"
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as DiIcons from "react-icons/di";
import * as BsIcons from "react-icons/bs";
import * as ImIcons from "react-icons/im";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";


const { HeadTitle, title1, subtitle1, title2, subtitle2, title3, subtitle3, title4, subtitle4,
  title5, subtitle5, title6, title7, title8, title9, title10, title11, title12, subtitle6, subtitle7, subtitle8,
  subtitle9, subtitle10,subtitle11, subtitle12, tagline, ppcmgmt } = websiteDevCard;

function WebsiteDesignCardsR({ className = "" }) {
  return (
    <>
      <section className="WebsiteDevelopment-page">

        <div className='container'>
          <h1>{HeadTitle}</h1>
          <div className="webdev-card5">
            {/* <div className="col-lg-2 col-md-4 col-12"> */}
            <div className="CardWDnew">
              <BsIcons.BsCart3 className="wdiconsnew" />
              <h3 className="WDGoals__text">{title1}</h3>
              <p className="WDGoals__text1">{subtitle1}</p>
            </div>
            {/* </div> */}
            {/* <div className="col-lg-2 col-md-4 col-12"> */}
            <div className="CardWDnew">
              <MdIcons.MdComputer className="wdiconsnew" />
              <h3 className="WDGoals__text">{title2}</h3>
              <p className="WDGoals__text2">{subtitle2}</p>
            </div>
            {/* </div> */}
            {/* <div className="col-lg-2 col-md-4 col-12"> */}
            <div className="CardWDnew">
              <AiIcons.AiFillAndroid className="wdiconsnew" />
              <h3 className="WDGoals__text">{title3}</h3>
              <p className="WDGoals__text3">{subtitle3}</p>
            </div>
            {/* </div> */}
            {/* <div className="col-lg-2 col-md-4 col-12"> */}
            <div className="CardWDnew">
              <DiIcons.DiMagento className="wdiconsnew" />
              <h3 className="WDGoals__text">{title4}</h3>
              <p className="WDGoals__text4">{subtitle4}</p>
            </div>
            {/* </div> */}
            {/* <div className="col-lg-2 col-md-4 col-12"> */}
            <div className="CardWDnew">
              <AiIcons.AiFillHtml5 className="wdiconsnew" />
              <h3 className="WDGoals__text">{title5}</h3>
              <p className="WDGoals__text5">{subtitle5}</p>
            </div>
            {/* </div> */}
            {/* <div className="col-lg-2 col-md-4 col-12"> */}
            <div className="CardWDnew">
              <ImIcons.ImWordpress className="wdiconsnew" />
              <h3 className="WDGoals__text">{title6}</h3>
              <p className="WDGoals__text6">{subtitle6}</p>
            </div>
            {/* </div> */}
            {/* <div className="col-lg-2 col-md-4 col-12"> */}
            <div className="CardWDnew">
              <BsIcons.BsFillFileEarmarkCodeFill className="wdiconsnew" />
              <h3 className="WDGoals__text">{title7}</h3>
              <p className="WDGoals__text7">{subtitle7}</p>
            </div>
            {/* </div> */}
            {/* <div className="col-lg-2 col-md-4 col-12"> */}
            <div className="CardWDnew">
              <SiIcons.SiPhp className="wdiconsnew" />
              <h3 className="WDGoals__text">{title8}</h3>
              <p className="WDGoals__text8">{subtitle8}</p>
            </div>
            {/* </div> */}
            {/* <div className="col-lg-2 col-md-4 col-12"> */}
            <div className="CardWDnew">
              <FaIcons.FaDrupal className="wdiconsnew" />
              <h3 className="WDGoals__text">{title9}</h3>
              <p className="WDGoals__text9">{subtitle9}</p>
            </div>
            {/* </div> */}
            {/* <div className="col-lg-2 col-md-4 col-12"> */}
            <div className="CardWDnew">
              <FaIcons.FaJoomla className="wdiconsnew" />
              <h3 className="WDGoals__text">{title10}</h3>
              <p className="WDGoals__text10">{subtitle10}</p>
            </div>
            <div className="CardWDnew">
              <FaIcons.FaJoomla className="wdiconsnew" />
              <h3 className="WDGoals__text">{title11}</h3>
              <p className="WDGoals__text10">{subtitle11}</p>
            </div>
            <div className="CardWDnew">
              <FaIcons.FaJoomla className="wdiconsnew" />
              <h3 className="WDGoals__text">{title12}</h3>
              <p className="WDGoals__text10">{subtitle12}</p>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* <ul className="cardsWDv">
          <li className="CardWD">
            <BsIcons.BsCart3 className="wdicons" />
            <h3 className="WDGoals__text">{title1}</h3>
            <p className="WDGoals__text1">{subtitle1}</p>
          </li>
          <li className="CardWD">
            <MdIcons.MdComputer className="wdicons" />
            <h3 className="WDGoals__text">{title2}</h3>
            <p className="WDGoals__text2">{subtitle2}</p>
          </li>

          <li className="CardWD">
            <AiIcons.AiFillAndroid className="wdicons" />
            <h3 className="WDGoals__text">{title3}</h3>
            <p className="WDGoals__text3">{subtitle3}</p>
          </li>

          <li className="CardWD">
            <DiIcons.DiMagento className="wdicons" />
            <h3 className="WDGoals__text">{title4}</h3>
            <p className="WDGoals__text4">{subtitle4}</p>
          </li>

          <li className="CardWD">
            <AiIcons.AiFillHtml5 className="wdicons" />
            <h3 className="WDGoals__text">{title5}</h3>
            <p className="WDGoals__text5">{subtitle5}</p>
          </li>
          <li className="CardWD">
            <ImIcons.ImWordpress className="wdicons" />
            <h3 className="WDGoals__text">{title6}</h3>
            <p className="WDGoals__text6">{subtitle6}</p>

          </li>
          <li className="CardWD">
            <BsIcons.BsFillFileEarmarkCodeFill className="wdicons" />
            <h3 className="WDGoals__text">{title7}</h3>
            <p className="WDGoals__text7">{subtitle7}</p>

          </li>
          <li className="CardWD">
            <SiIcons.SiPhp className="wdicons" />
            <h3 className="WDGoals__text">{title8}</h3>
            <p className="WDGoals__text8">{subtitle8}</p>
          </li>
          <li className="CardWD">
            <FaIcons.FaDrupal className="wdicons" />
            <h3 className="WDGoals__text">{title9}</h3>
            <p className="WDGoals__text9">{subtitle9}</p>
          </li>
          <li className="CardWD">
            <FaIcons.FaJoomla className="wdicons" />
            <h3 className="WDGoals__text">{title10}</h3>
            <p className="WDGoals__text10">{subtitle10}</p>
          </li>
        </ul> */}
      </section>
    </>
  )
}

export default WebsiteDesignCardsR;
