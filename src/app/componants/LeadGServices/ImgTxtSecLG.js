import React from 'react'
import { Container,Col, Row, Image } from 'react-bootstrap'
import imgtxtseclg from "@/app/data/imgtxtseclg"
import Link from "next/link";
import Title from "../Reuseable/Title";

const { images, badge, why,  tagline, title, text1, text2,
  text3,text4, text5, text6, text7 } = imgtxtseclg ;

function ImgTxtSecLG() {
  return (
    <>
 <section className="ImgTxtSecLG-page">
      <Container>
         <Row>  
          <Col xl={4}>
          <div className="ImgTxtSecLG__left">
              <ul className="list-unstyled ImgTxtSecLg__images">
                {images.map((image, i) => (
                  <li key={i}>
                    <div className={`ImgTxtSeclg__img-${i + 1}`}>
                      <Image
                        src={require(`@/assets/images/resources/${image}`).default.src}
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col xl={8}>
          <div className="ImgTxtSecLG__right">
              <Title title={title} tagline={tagline} className="text-left" />
              <p className="ImgTxtSecLG__right-text-12">{text1}</p>
              <p className="ImgTxtSecLG__right-text-13">{text3}</p>
              <p className="ImgTxtSecLG__right-text-14">{text4}</p>
              <p className="ImgTxtSecLG__right-text-14">{text5}</p>
              <h4 className="ImgTxtSecLG__right-text-2">{text2}</h4>
              {/* <Link href="/about">
                <a className="thm-btn ImgTxtSecLG__btn">Discover More</a>
              </Link> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    </>
  )
}

export default ImgTxtSecLG
