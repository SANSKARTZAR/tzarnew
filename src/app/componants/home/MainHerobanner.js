'use client';
import React, { useEffect, useState } from 'react';
import { useWindowSize } from "@react-hook/window-size/throttled";
import Bannertxt from "./Bannertxt";
import ContactForm from '../contact/ContactForm';

function MainHerobanner() {
  const [width, height] = useWindowSize({ fps: 60 });
  const breakpoint = 600;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  if (width > breakpoint) {
    return (
      <>
        <section className="section-hero">
          <div className="video-container">
            <Bannertxt />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="video-bg desktop-video"
            >
              <source
                src="https://ik.imagekit.io/xhgygdewi6/tzarheader.mp4?updatedAt=1698295413309"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* ✅ Styles */}
        <style jsx>{`
          .section-hero {
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 100vh;
          }

          .section-hero .video-container {
            position: relative;
            width: 100%;
            height: 100%;
          }

          .section-hero video {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          /* ✅ For Apple laptop range (MacBook Pro / Air screens) */
          @media screen and (max-width: 1450px) and (min-width: 1200px) {
            .section-hero {
              height: 90vh; /* same visible area as desktop */
            }
            .section-hero video {
              height: 90vh;
              object-fit: cover;
            }
            .section-hero .video-container {
              height: 90vh;
            }
          }
        `}</style>
      </>
    );
  }

  return (
    <>
      <section className="section-hero">
        <Bannertxt />
        <video
          autoPlay
          loop
          muted
          src="https://ik.imagekit.io/xhgygdewi6/Bgvideo.mp4?updatedAt=1710580577029"
        ></video>
        <ContactForm />
      </section>

      {/* ✅ Styles */}
      <style jsx>{`
        .section-hero {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100vh;
        }

        .section-hero video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ✅ Keep same visible area on Apple laptop sizes */
        @media screen and (max-width: 1450px) and (min-width: 1200px) {
          .section-hero {
            height: 90vh;
          }
          .section-hero video {
            height: 90vh;
          }
        }
      `}</style>
    </>
  );
}

export default MainHerobanner;
