'use client';
import React from 'react'
import Link from 'next/link'
import { Image } from 'react-bootstrap'




// const { bg, img1,img2,img3,img4,img5,img6,img7,img8, images, images1, imgtitle, tagline, bILL, title, text1, text2 } = graphicdesign ;


function ExeculsiveCardsR() {
  return (
    <>
      <section className="ExeculsiveCardsR-page">
        <div className="mainEc">
          <div className="section-title5">
            <span>We Work For Industries</span>
            <h2>Helping Businesses in All Domains</h2>
            <div className="bar"></div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-6">
                <div className="box1">
                  <i className="fa-solid fa-1x fa-inverse fa-chart-simple"></i>
                  <h3 className="textBoxEC1">E-commerce</h3>
                  <Link href="/ecommerce"></Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="box1">
                  <i className="flaticon-bank"></i>
                  <h3 className="textBoxEC" >Education</h3>
                  <Link href="/services-details"></Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="box1">
                  <i className="flaticon-graduation-cap">
                  </i>
                  <h3 className="textBoxEC" >Consumers Apps</h3>
                  <Link href="/services-details"></Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="box1">
                  <i className="flaticon-stock-market"></i>
                  <h3 className="textBoxEC">Healthcare</h3>
                  <Link href="/services-details"></Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="box1">
                  <i className="flaticon-employee">
                  </i>
                  <h3 className="textBoxEC">Real Estate</h3>
                  <Link href="/services-details"></Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="box1">
                  <i className="flaticon-waiter"></i>
                  <h3 className="textBoxEC">B2B</h3>
                  <Link href="/services-details"></Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="box1">
                  <i className="flaticon-stethoscope"></i>
                  <h3 className="textBoxEC" >BFSI</h3>
                  <Link href="/services-details"></Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="box1">
                  <i className="flaticon-user"></i>
                  <h3 className="textBoxEC">View more</h3>
                  <Link href="/services-details"></Link>  </div>
              </div>
            </div>
          </div>






        </div>
      </section>

    </>
  )
}

export default ExeculsiveCardsR
