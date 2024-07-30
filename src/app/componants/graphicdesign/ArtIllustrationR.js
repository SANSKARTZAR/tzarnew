/* eslint-disable @next/next/no-img-element */
import artillustration from "@/app/data/artillustration";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "next/link";
const { bg, img1,img2,img3,img4,img5,img6,img7,img8,img9,img10, images, images1, imgtitle, tagline, bILL, title, text1, text2 } = artillustration ;

const ArtIllustrationR = () => {
  return (
    <section className="ArtIllustration-page">
       <div
          className="counter-one-pattern"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <div className="container-fluid">
      <div className="mainAi">
          <div className="ArtIllustration__center">
            {/* <Title title={title} tagline={tagline} className="text-left section-title1__titleAi" /> */}
            <h1 className="section-title1__titleAi">{title}</h1>
            <p className="ArtIllustration__right-text-1">{text1}</p>
         </div>
         <ul className="cardsAi">
          <li className="cards_itemAi">
            <div className="cardAi">
              <div className="card_imageAi">
              <Image src={img1.src} alt=""/>
              </div>
                <h4 className="card_titleAi">Illustration Design</h4> 
            </div>
          </li>
          <li className="cards_itemAi">
            <div className="cardAi">
            <div className="card_imageAi">
              <Image src={img2.src} alt=""/>
            </div>  
              <h4 className="card_titleAi">Character Design</h4> 
            </div>
          </li>
          <li className="cards_itemAi">
            <div className="cardAi">
            <div className="card_imageAi">
              <Image src={img3.src} alt=""/>
             </div> 
               <h4 className="card_titleAi">Card Design</h4> 
          </div>
          </li>
          <li className="cards_itemAi">
            <div className="cardAi">
            <div className="card_imageAi">
              <Image src={img4.src} alt=""/>
            </div>  
              <h4 className="card_titleAi">Art Design</h4> 
            </div>
          </li>
          <li className="cards_itemAi">
            <div className="cardAi">
            <div className="card_imageAi">
              <Image src={img5.src} alt=""/>
            </div>  
              <h4 className="card_titleAi">CD Cover Design</h4> 
          </div>
          </li>
          <li className="cards_itemAi">
            <div className="cardAi">
            <div className="card_imageAi">
              <Image src={img6.src} alt=""/>
            </div>  
              <h4 className="card_titleAi">Tattoo Design</h4> 
          </div>
          </li>
          <li className="cards_itemAi">
            <div className="cardAi">
            <div className="card_imageAi">
              <Image src={img7.src} alt=""/>
            </div>  
              <h4 className="card_titleAi">Invitation Design</h4> 
          </div>
          </li>
          <li className="cards_itemAi">
            <div className="cardAi">
            <div className="card_imageAi">
              <Image src={img8.src} alt=""/>
            </div>  
              <h4 className="card_titleAi">eBook Cover Design</h4> 
          </div>
          </li>
          <li className="cards_itemAi">
            <div className="cardAi">
              <div className="card_imageAi">
                <Image src={img9.src} alt=""/>
            </div>  
              <h4 className="card_titleAi">Greeting Card Design</h4> 
          </div>
          </li>
          <li className="cards_itemAi">
            <div className="cardAi">
              <div className="card_imageAi">
                <Image src={img10.src} alt=""/>
              </div>  
              <h4 className="card_titleAi">Book Cover Design</h4> 
            </div>
          </li>
        </ul>
        <div className="graphic-crd-btn">
          <Link href="#Contactform" className="thm-btn GraphicDesigning__btn">
            Enquiry Now
          </Link>
          </div>
      </div> 
      </div>
    </section>
  )
};

export default ArtIllustrationR;


