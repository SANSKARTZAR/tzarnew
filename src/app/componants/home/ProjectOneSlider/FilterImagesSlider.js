/* eslint-disable @next/next/no-img-element */
'use client';
import React , {useState} from 'react'
import Link from "next/link";
import Menu from "@/app/data/Menu";
import Slider from "react-slick";
// import './projectslider.module.css'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" , borderRadius:'15px' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" , borderRadius:'15px' }}
        onClick={onClick}
      />
    );
}

function FilterImagesSlider() {
    const [sliderSettings, setSliderSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 4,
        initialSlide:1,
        speed: 2000,
        autoplay:false,
        autoplaySpeed: 100,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    
      });
    const [items, setItems] = useState(Menu);
    const [active, setActive] = useState(false);
    const filterItem = (categItem) => {
      const updateItems = Menu.filter((curElem) => {
        return curElem.category === categItem;
      });
  
      setItems(updateItems);
      setActive(true);
    };

  return (
    <>

       <div className="containerWS"> 
       <div className="titleheadContainer1">
            <h1>Work ShowCase</h1>
       </div>
        <ul className="project-filter  style1 post-filter has-dynamic-filters-counter list-unstyledPF">
          <li className="nav-item filter-text ">
            <Link
              className={active ? "nav-links" : "nav-links active"}
              href="javascrip:0;"
              onClick={() => filterItem("Creative")}
            >
              Creative
   
            </Link>
          </li>
          <li className="nav-item filter-text ">
            <Link
              className={active ? "nav-links" : "nav-links active"}
              href="javascrip:0;"
              onClick={() => filterItem("WebDesign")}
            >
              Photograph 
            </Link>
          </li>
          <li className="nav-item filter-text">
            <Link
              className={active ? "nav-links" : "nav-links active"}
              href="javascrip:0;"
              onClick={() => filterItem("Reels")}
            >
              Reels
            </Link>
          </li>
          <li className="nav-item filter-text">
            <Link
              className={active ? "nav-links" : "nav-links active"}
              href="javascrip:0;"
              onClick={() => filterItem("Print&Packaging")}
            >
              Print&Packaging
            </Link>
          </li>
          {/* <li className="nav-item filter-text">
            <Link
              className={active ? "nav-links" : "nav-links active"}
              href="javascrip:0;"
              onClick={() => setItems(Menu)}
            >
              All
            </Link>
          </li> */}
        </ul>
        </div>

      <Slider {...sliderSettings} className="MobileSlider" >
          {items.map((elem) => {
            const { id, name, image } = elem;

            return (
                
                <div className="GridContainer" key={id}>
                     <img  src={image.src} alt={name}  width="84%" height="50%" style={{marginLeft:'32px', marginTop:'40px' }}  />
                </div>
          
            );
          })}
          </Slider>
    </>
   )
}
// img-fluid 
export default FilterImagesSlider;