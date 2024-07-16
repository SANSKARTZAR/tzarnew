/* eslint-disable @next/next/no-img-element */
import LogoDesigning from "@/app/data/logodesigning";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
const { bg, img1, img2, img3, img4, img5, img6, img7, img8, img9, images, images1, imgtitle, tagline, bILL, title, text1, text2 } = LogoDesigning;

const LogoDesigningR = () => {
  return (
    <section className="LogoDesigningR-page">
      {/* <div
          className="counter-one-pattern"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div> */}
      <div className="mainLds">
        <div className="container-fluid">
          <div className="LogoDesigningR__center">
            {/* <Title title={title} tagline={tagline} className="text-left section-title1__titleLd" /> */}
            <h1 className="section-title1__titleLd">{title}</h1>
            <p className="LogoDesigningR__right-text-1">{text1}</p>
          </div>
          <ul className="cardsLd">
            <li className="cards_itemLd">
              <div className="cardLd">
                <div className="card_imageLd">
                  <Image src={img1.src} alt="" />
                </div>
                <h4 className="card_titleLd">Billboard Design</h4>
              </div>
            </li>
            <li className="cards_itemLd">
              <div className="cardLd">
                <div className="card_imageLd">
                  <Image src={img2.src} alt="" />
                </div>
                <h4 className="card_titleLd">Stationery Design</h4>
              </div>
            </li>
            <li className="cards_itemLd">
              <div className="cardLd">
                <div className="card_imageLd">
                  <Image src={img3.src} alt="" />
                </div>
                <h4 className="card_titleLd">Signage Design</h4>
              </div>
            </li>
            <li className="cards_itemLd">
              <div className="cardLd">
                <div className="card_imageLd">
                  <Image src={img4.src} alt="" />
                </div>
                <h4 className="card_titleLd">Letterhead Design</h4>
              </div>
            </li>
            <li className="cards_itemLd">
              <div className="cardLd">
                <div className="card_imageLd">
                  <Image src={img5.src} alt="" />
                </div>
                <h4 className="card_titleLd">Label Design</h4>
              </div>
            </li>
            <li className="cards_itemLd">
              <div className="cardLd">
                <div className="card_imageLd">
                  <Image src={img6.src} alt="" />
                </div>
                <h4 className="card_titleLd">Business Card Design</h4>
              </div>
            </li>
            <li className="cards_itemLd">
              <div className="cardLd">
                <div className="card_imageLd">
                  <Image src={img7.src} alt="" />
                </div>
                <h4 className="card_titleLd">Car Wrap Design</h4>
              </div>
            </li>
            <li className="cards_itemLd">
              <div className="cardLd">
                <div className="card_imageLd">
                  <Image src={img8.src} alt="" />
                </div>
                <h4 className="card_titleLd">Logo Design</h4>
              </div>
            </li>
            <li className="cards_itemLd">
              <div className="cardLd">
                <div className="card_imageLd">
                  <Image src={img9.src} alt="" />
                </div>
                <h4 className="card_titleLd">Trade Show Booth Design</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LogoDesigningR;


