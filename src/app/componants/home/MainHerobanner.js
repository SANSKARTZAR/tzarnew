'use client';
import React from 'react'
// import Slider from 'react-slick'
import { useWindowSize } from "@react-hook/window-size/throttled";
import Bannertxt from "./Bannertxt";
import { useEffect, useState } from 'react';
import ContactForm from '../contact/ContactForm';

function MainHerobanner() {
  const [width, height] = useWindowSize({ fps: 60 });
  const breakpoint = 600;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>; // Or some other placeholder
  }

  if (width > breakpoint) {
    return (
      <>
        <section className="section-hero">
          <div className="video-container">
            <Bannertxt />
            {/* <video autoPlay loop muted src="https://ik.imagekit.io/xhgygdewi6/tzarheader.mp4?updatedAt=1698295413309"></video> */}
            <video autoPlay loop muted playsInline className="video-bg desktop-video">
              <source
                src="https://ik.imagekit.io/xhgygdewi6/tzarheader.mp4?updatedAt=1698295413309"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      </>
    )
  }
  return (
    <>
      <section className="section-hero">
        {/* <div className="video-container"> */}
          <Bannertxt />
          <video autoPlay loop muted src='https://ik.imagekit.io/xhgygdewi6/Bgvideo.mp4?updatedAt=1710580577029'></video>
          {/* <video autoPlay loop muted playsInline className="video-bg mobile-video">
            <source
              src="https://ik.imagekit.io/xhgygdewi6/Bgvideo.mp4?updatedAt=1710580577029"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
          <ContactForm />
        {/* </div> */}
      </section>
    </>
  );
}
export default MainHerobanner;
