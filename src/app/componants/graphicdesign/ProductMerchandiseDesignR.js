/* eslint-disable @next/next/no-img-element */
import productmerchandisedesign from "@/app/data/productmerchandisedesign";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
const { bg, img1, img2, img3, img4, img5, img6, images, images1, imgtitle, tagline, bILL, title, text1, text2 } = productmerchandisedesign;

const ProductMerchandiseDesignR = () => {
  return (
    <section className="ProductMerchandiseDesignR-page">
      <div className="container">
        <div className="mainPMD">
          <div className="ProductMerchandiseDesignR__center">
            {/* <Title title={title} tagline={tagline} className="text-left section-title1__titlePDMR" /> */}
            <h1 className="section-title1__titlePDMR" >{title}</h1>
            <p className="ProductMerchandiseDesignR__right-text-1">{text1}</p>
            {/* <h1>PrintD</h1> */}
          </div>
          <ul className="cardsPMD">
            <li className="cards_itemPMD">
              <div className="cardPMD">
                <div className="card_imagePMD">
                  <Image src={img1.src} alt="" />
                </div>
                <h4 className="card_titlePMD">T-shirt Design</h4>
              </div>
            </li>
            <li className="cards_itemPMD">
              <div className="cardPMD">
                <div className="card_imagePMD">
                  <Image src={img2.src} alt="" />
                </div>
                <h4 className="card_titlePMD">Packaging Design</h4>
              </div>
            </li>
            <li className="cards_itemPMD">
              <div className="cardPMD">
                <div className="card_imagePMD">
                  <Image src={img3.src} alt="" />
                </div>
                <h4 className="card_titlePMD">Bag and Tote Design</h4>
              </div>
            </li>
            <li className="cards_itemPMD">
              <div className="cardPMD">
                <div className="card_imagePMD">
                  <Image src={img4.src} alt="" />
                </div>
                <h4 className="card_titlePMD">Cup and Mug Design</h4>
              </div>
            </li>
            <li className="cards_itemPMD">
              <div className="cardPMD">
                <div className="card_imagePMD">
                  <Image src={img5.src} alt="" />
                </div>
                <h4 className="card_titlePMD">Apparel Design</h4>
              </div>
            </li>
            <li className="cards_itemPMD">
              <div className="cardPMD">
                <div className="card_imagePMD">
                  <Image src={img6.src} alt="" />
                </div>
                <h4 className="card_titlePMD">Merchandize Design</h4>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </section>
  )
};

export default ProductMerchandiseDesignR;


