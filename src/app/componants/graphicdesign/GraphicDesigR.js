/* eslint-disable @next/next/no-img-element */
import graphicdesign from "@/app/data/graphicdesign";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
const { bg, img1, img2, img3, img4, img5, img6, img7, img8, images, images1, imgtitle, tagline, bILL, title, text1, text2 } = graphicdesign;

const GraphicDesigR = () => {
  return (
    <section className="GraphicdesignR-page">
      <div
        className="counter-one-pattern"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div className="container-fluid">
        <div className="mainGd">
          <div className="GraphicdesignR__center">
            {/* <Title title={title} tagline={tagline} className="text-left section-title1__titleGD" /> */}
            <h1 className="section-title1__titleGD">{title}</h1>
            <p className="GraphicdesignR__right-text-1">{text1}</p>

          </div>
          <ul className="cardsGd">
            <li className="cards_itemGd">
              <div className="cardGd">
                <div className="card_imageGd">
                  <Image src={img1.src} alt="" />
                </div>
                <h4 className="card_titleGd">Graphic Design</h4>
              </div>
            </li>
            <li className="cards_itemGd">
              <div className="cardGd">
                <div className="card_imageGd">
                  <Image src={img2.src} alt="" />
                </div>
                <h4 className="card_titleGd">PowerPoint Design</h4>
              </div>
            </li>
            <li className="cards_itemGd">
              <div className="cardGd">
                <div className="card_imageGd">
                  <Image src={img3.src} alt="" />
                </div>
                <h4 className="card_titleGd">Vector Design</h4>
              </div>
            </li>
            <li className="cards_itemGd">
              <div className="cardGd">
                <div className="card_imageGd">
                  <Image src={img4.src} alt="" />
                </div>
                <h4 className="card_titleGd">3D Design</h4>
              </div>
            </li>
            <li className="cards_itemGd">
              <div className="cardGd">
                <div className="card_imageGd">
                  <Image src={img5.src} alt="" />
                </div>
                <h4 className="card_titleGd">Photoshop Design</h4>
              </div>
            </li>
            <li className="cards_itemGd">
              <div className="cardGd">
                <div className="card_imageGd">
                  <Image src={img6.src} alt="" />
                </div>
                <h4 className="card_titleGd">Podcast Design</h4>
              </div>
            </li>
            <li className="cards_itemGd">
              <div className="cardGd">
                <div className="card_imageGd">
                  <Image src={img7.src} alt="" />
                </div>
                <h4 className="card_titleGd">Infographic Design</h4>
              </div>
            </li>
            <li className="cards_itemGd">
              <div className="cardGd">
                <div className="card_imageGd">
                  <Image src={img8.src} alt="" />
                </div>
                <h4 className="card_titleGd">Mascot Design</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesigR;


