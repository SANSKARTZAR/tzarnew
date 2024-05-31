'use client';
import React from 'react'
// import Slider from 'react-slick'
import { useWindowSize } from "@react-hook/window-size/throttled";
// import Bannertxt from "./Bannertxt";
import { useEffect, useState } from 'react';

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
        {/* <Bannertxt /> */}
        <video autoPlay loop muted src="https://ik.imagekit.io/xhgygdewi6/tzarheader.mp4?updatedAt=1698295413309"></video>

      </>
    )
  }
  return (
      // <Bannertxt />
      <>
        
      </>
  );
}
export default MainHerobanner;
