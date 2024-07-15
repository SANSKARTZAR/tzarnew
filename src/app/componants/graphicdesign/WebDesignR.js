'use client';
/* eslint-disable @next/next/no-img-element */
import webdesigning from "@/app/data/webdesigning";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Tilt from "react-tilt";
import Link from "next/link";
import Title from "../Reuseable/Title";
// import BD from "@/images/resources/logobranding/bILL-01-01-01.png"
const { bg, img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12, images, images1, imgtitle, tagline, bILL, title, text1, text2 } = webdesigning ;

const WebDesignR = () => {
  return (
    <section className="WebdesignR-page">
       <div
          className="counter-one-pattern"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
      <div className="mainWd">
          <div className="WebdesignR__center">
            {/* <Title title={title} tagline={tagline} className="text-left section-title1__title" /> */}
            <h1 className="section-title1__titleWD">{title}</h1>
            <p className="WebdesignR__right-text-1 ">{text1}</p>
         </div>
         <ul className="cardsWd">
          <li className="cards_itemWd">
            <div className="cardWd">
              <div className="card_imageWd">
              <Image src={img1.src} alt=""/>
              </div>
                <h4 className="card_titleWd">Wordpress Design</h4> 
            </div>
          </li>
          <li className="cards_itemWd">
            <div className="cardWd">
            <div className="card_imageWd">
              <Image src={img2.src} alt=""/>
            </div>  
              <h4 className="card_titleWd">Icon Design</h4> 
            </div>
          </li>
          <li className="cards_itemWd">
            <div className="cardWd">
            <div className="card_imageWd">
              <Image src={img3.src} alt=""/>
             </div> 
               <h4 className="card_titleWd">Wix Website Design</h4> 
          </div>
          </li>
          <li className="cards_itemWd">
            <div className="cardWd">
            <div className="card_imageWd">
              <Image src={img4.src} alt=""/>
            </div>  
              <h4 className="card_titleWd">Web Design</h4> 
            </div>
          </li>
          <li className="cards_itemWd">
            <div className="cardWd">
            <div className="card_imageWd">
              <Image src={img5.src} alt=""/>
            </div>  
              <h4 className="card_titleWd">App Design</h4> 
          </div>
          </li>
          <li className="cards_itemWd">
            <div className="cardWd">
            <div className="card_imageWd">
              <Image src={img6.src} alt=""/>
            </div>  
              <h4 className="card_titleWd">Shopify Design</h4> 
          </div>
          </li>
          <li className="cards_itemWd">
            <div className="cardWd">
            <div className="card_imageWd">
              <Image src={img7.src} alt=""/>
            </div>  
              <h4 className="card_titleWd">Newsletter Design</h4> 
          </div>
          </li>
          <li className="cards_itemWd">
            <div className="cardWd">
            <div className="card_imageWd">
              <Image src={img8.src} alt=""/>
            </div>  
              <h4 className="card_titleWd">Squarespace Design</h4> 
          </div>
          </li>
          <li className="cards_itemWd">
            <div className="cardWd">
              <div className="card_imageWd">
                <Image src={img9.src} alt=""/>
            </div>  
              <h4 className="card_titleWd">Banner Ad Design</h4> 
          </div>
          </li>
          <li className="cards_itemWd">
            <div className="cardWd">
              <div className="card_imageWd">
                <Image src={img10.src} alt=""/>
              </div>  
              <h4 className="card_titleWd">Email Marketing Design</h4> 
            </div>
          </li>
          <li className="cards_itemWd">
            <div className="cardWd">
              <div className="card_imageWd">
                <Image src={img11.src} alt=""/>
              </div>  
              <h4 className="card_titleWd">WooCommerce Design</h4> 
            </div>
          </li>
          <li className="cards_itemWd">
            <div className="cardWd">
              <div className="card_imageWd">
                <Image src={img12.src} alt=""/>
              </div>  
              <h4 className="card_titleWd">Landing Page Design</h4> 
            </div>
          </li>
        </ul>
      </div> 
    </section>
  );
};

export default WebDesignR;


