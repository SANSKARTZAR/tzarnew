import React from 'react'
import * as HiIcons from "react-icons/hi"
import * as FaIcons from "react-icons/fa"
import * as ImIcons from "react-icons/im"
import * as GiIcons from "react-icons/gi"
import benefitsckm from "@/app/data/benefitsckm";

const { bg } = benefitsckm;

function WhatWeDoLG({ className = "" }) {
  return (
    <>
      <section
        className="BenefitsLGContainer"
        style={{
          position: 'relative',
          padding: '60px 0',
          overflow: 'hidden',
        }}
      >
        <div
          className="counter-one-pattern"
          style={{
            backgroundImage: `url(${bg.src})`,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '40%',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat', // Keep pattern repeating for background
            backgroundSize: 'auto',
            zIndex: -1,
          }}
        ></div>

        <div className='container' style={{ position: 'relative', zIndex: 1 }}>
          <h2
            className="text-center fw-bold mb-5 titleHeadPPC"
            style={{ marginBottom: '3rem' }}
          >
            WHAT WE DO?
          </h2>

          <div className="row text-center">
            <div className="col-lg-4 col-md-6 col-12 mb-4 led-new">
              <HiIcons.HiDocument className="Lgicons" />
              <h1>Content Marketing</h1>
              <p>Create content that attract attention</p>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4 led-new">
              <ImIcons.ImTree className="Lgicons" />
              <h1>Link Building</h1>
              <p>Let search engines know about your website</p>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4 led-new">
              <FaIcons.FaUser className="Lgicons" />
              <h1>Competitive Research</h1>
              <p>Find the strengths and weaknesses of current and potential competitors</p>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4 led-new">
              <ImIcons.ImTree className="Lgicons" />
              <h1>On-page SEO</h1>
              <p>Optimization of HTML code and page content</p>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4 led-new">
              <GiIcons.GiTrophyCup className="Lgicons" />
              <h1>Local Fame</h1>
              <p>Press-releases and links at all local directories and forums</p>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4 led-new">
              <FaIcons.FaUser className="Lgicons" />
              <h1>Conversion Optimization</h1>
              <p>Increasing conversion of the percentage of visitors into customers</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhatWeDoLG
