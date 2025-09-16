'use client';
/* eslint-disable @next/next/no-img-element */
import printdesign from "@/app/data/printdesign";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";

const {
  bg, img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12, img13, img14,
  title, text1
} = printdesign;

const PrintDesignR = () => {
  const [screenWidth, setScreenWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    setScreenWidth(window.innerWidth); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Control card width based on screen size
  const getCardWidth = () => {
    if (screenWidth < 768) return '48%'; // 2 per row on mobile
    if (screenWidth < 1024) return '30%'; // 3 per row on iPad
    return '22%'; // 4 per row on desktop
  };

  const containerStyle = {
    padding: '60px 20px',
    backgroundColor: '#fff',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: screenWidth < 480 ? '1.8rem' : '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const textStyle = {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 40px',
    fontSize: '1rem',
    color: '#666',
  };

  const cardListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: 0,
    listStyle: 'none',
  };

  const cardItemStyle = {
    width: getCardWidth(),
    display: 'flex',
    justifyContent: 'center',
  };

  const cardStyle = {
    background: '#fff',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    width: '100%',
    transition: 'all 0.3s ease-in-out',
  };

  const imgStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  };

  const cardTitleStyle = {
    fontSize: '1.1rem',
    marginTop: '15px',
    fontWeight: '600',
  };

  const buttonWrapper = {
    textAlign: 'center',
    marginTop: '40px',
  };

  const buttonStyle = {
    padding: '12px 30px',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '30px',
    textDecoration: 'none',
    fontWeight: 600,
  };

  const cardData = [
    { img: img1, title: 'Flyer Design' },
    { img: img2, title: 'Brochure Design' },
    { img: img3, title: 'Poster Design' },
    { img: img4, title: 'Advertisement Design' },
    { img: img5, title: 'Catalogue Design' },
    { img: img6, title: 'Envelope Design' },
    { img: img7, title: 'Magazine Design' },
    { img: img8, title: 'Menu Design' },
    { img: img9, title: 'Newspaper Ad Design' },
    { img: img10, title: 'Print Design' },
    { img: img11, title: 'Sticker Design' },
    { img: img12, title: 'Resume Design' },
    { img: img13, title: 'Word Template Design' },
    { img: img14, title: 'PostCard Design' },
  ];

  return (
    <section className="PrintDesignR-page">
      <div className="container-fluid">
        <div style={containerStyle}>
          <div className="PrintDesignR__center">
            <h1 style={titleStyle}>{title}</h1>
            <p style={textStyle}>{text1}</p>
          </div>

          <ul style={cardListStyle}>
            {cardData.map((card, index) => (
              <li key={index} style={cardItemStyle}>
                <div style={cardStyle}>
                  <div>
                    <Image src={card.img.src} alt={card.title} style={imgStyle} />
                  </div>
                  <h4 style={cardTitleStyle}>{card.title}</h4>
                </div>
              </li>
            ))}
          </ul>

          <div style={buttonWrapper}>
            <Link href="#Contactform" style={buttonStyle}>
              Enquiry Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintDesignR;
