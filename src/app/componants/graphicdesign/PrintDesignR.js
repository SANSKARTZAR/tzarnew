/* eslint-disable @next/next/no-img-element */
import printdesign from "@/app/data/printdesign";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
const { bg, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, images, images1, imgtitle, tagline, bILL, title, text1, text2 } = printdesign;

const PrintDesignR = () => {
  return (
    <section className="PrintDesignR-page">
      {/* <div
          className="counter-one-pattern"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div> */}
      <div className="container-fluid">


        <div className="mainPDR">
          <div className="PrintDesignR__center">
            {/* <Title title={title} tagline={tagline} className="text-left section-title1__titlePDR" /> */}
            <h1 className="section-title1__titlePDR">{title}</h1>
            <p className="PrintDesignR__right-text-1">{text1}</p>
          </div>
          <ul className="cardsPDR">
            <li className="cards_itemPDR">
              <div className="cardPDR">
                <div className="card_imagePDR">
                  <Image src={img1.src} alt="" />
                </div>
                <h4 className="card_titlePDR">Flyer Design</h4>
              </div>
            </li>
            <li className="cards_itemPDR">
              <div className="cardPDR">
                <div className="card_imagePDR">
                  <Image src={img2.src} alt="" />
                </div>
                <h4 className="card_titlePDR">Brochure Design</h4>
              </div>
            </li>
            <li className="cards_itemPDR">
              <div className="cardPDR">
                <div className="card_imagePDR">
                  <Image src={img3.src} alt="" />
                </div>
                <h4 className="card_titlePDR">Poster Design</h4>
              </div>
            </li>
            <li className="cards_itemPDR">
              <div className="cardPDR">
                <div className="card_imagePDR">
                  <Image src={img4.src} alt="" />
                </div>
                <h4 className="card_titlePDR">Advertisement Design</h4>
              </div>
            </li>
            <li className="cards_itemPDR">
              <div className="cardPDR">
                <div className="card_imagePDR">
                  <Image src={img5.src} alt="" />
                </div>
                <h4 className="card_titlePDR">Catalogue Design</h4>
              </div>
            </li>
            <li className="cards_itemPDR">
              <div className="cardPDR">
                <div className="card_imagePDR">
                  <Image src={img6.src} alt="" />
                </div>
                <h4 className="card_titlePDR">Envelope Design</h4>
              </div>
            </li>
            <li className="cards_itemPDR">
              <div className="cardPDR">
                <div className="card_imagePDR">
                  <Image src={img7.src} alt="" />
                </div>
                <h4 className="card_titlePDR">Magazine Design</h4>
              </div>
            </li>
            <li className="cards_itemPDR">
              <div className="cardPDR">
                <div className="card_imagePDR">
                  <Image src={img8.src} alt="" />
                </div>
                <h4 className="card_titlePDR">Menu Design</h4>
              </div>
            </li>
            <li className="cards_itemPDR">
              <div className="cardPDR">
                <div className="card_imagePDR">
                  <Image src={img9.src} alt="" />
                </div>
                <h4 className="card_titlePDR">Newspaper Ad Design</h4>
              </div>
            </li>
            <li className="cards_itemPDR">
              <div className="cardPDR">
                <div className="card_imagePDR">
                  <Image src={img10.src} alt="" />
                </div>
                <h4 className="card_titlePDR">Print Design</h4>
              </div>
            </li>
            <li className="cards_itemPDR">
              <div className="cardPDR">
                <div className="card_imagePDR">
                  <Image src={img11.src} alt="" />
                </div>
                <h4 className="card_titlePDR">Sticker Design</h4>
              </div>
            </li>
            <li className="cards_itemPDR">
              <div className="cardPDR">
                <div className="card_imagePDR">
                  <Image src={img12.src} alt="" />
                </div>
                <h4 className="card_titlePDR">Resume Design</h4>
              </div>
            </li>
            <li className="cards_itemPDR">
              <div className="cardPDR">
                <div className="card_imagePDR">
                  <Image src={img13.src} alt="" />
                </div>
                <h4 className="card_titlePDR">Word Template Design</h4>
              </div>
            </li>
            <li className="cards_itemPDR">
              <div className="cardPDR">
                <div className="card_imagePDR">
                  <Image src={img14.src} alt="" />
                </div>
                <h4 className="card_titlePDR">PostCard Design</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PrintDesignR;


