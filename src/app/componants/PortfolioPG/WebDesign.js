"use client";
import React from 'react'
import { Image, Container } from 'react-bootstrap';
import Pr1 from "@/assets/images/projects/r1.jpg"
import Pr2 from "@/assets/images/projects/r2.jpg"
import Pr3 from "@/assets/images/projects/r3.jpg"
import Pr4 from "@/assets/images/projects/r4.jpg"
import Pr5 from "@/assets/images/projects/r5.jpg"
import Pr6 from "@/assets/images/projects/r6.jpg"
import Pr7 from "@/assets/images/projects/r7.jpg"
import Pr8 from "@/assets/images/projects/r8.jpg"
import Pr9 from "@/assets/images/projects/r9.jpg"
import Pr10 from "@/assets/images/projects/r10.jpg"
import Pr11 from "@/assets/images/projects/r11.jpg"
import Pr12 from "@/assets/images/projects/r12.jpg"
import Pr13 from "@/assets/images/projects/r13.jpg"
import Pr14 from "@/assets/images/projects/r14.jpg"
import Pr15 from "@/assets/images/projects/r15.jpg"
import Pr16 from "@/assets/images/projects/r16.jpg"
import Pr17 from "@/assets/images/projects/r17.jpg"
import Pr18 from "@/assets/images/projects/r18.png"
import Title from '../Reuseable/Title';
import { Link } from 'react-scroll';

const data = [
  //   {
  // https://ik.imagekit.io/qofcbis03/1.jpg?updatedAt=1682421815117
  //     id: 1,
  //     type: "image",
  //     imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/1.jpg?updatedAt=1682423152315",
  //     category: "brand",
  //   },
  //   {

  {
    id: 1,
    type: "image",
    imagesUrl: Pr1.src,
    category: "Web",
    title: "Apollo India",
    link: "https://www.apolloindia.co/",
  },
  {
    id: 2,
    type: "image",
    imagesUrl: Pr2.src,
    category: "Web",
    title: "MahaaRajaa",
    link: "https://mahaarajaa.life/",
  },
  {
    id: 3,
    type: "image",
    imagesUrl: Pr3.src,
    category: "Web",
    title: "Blue7vets",
    link: "https://www.blue7vets.com/",
  },
  {
    id: 4,
    type: "image",
    imagesUrl: Pr15.src,
    category: "Web",
    title: "Cadd Centre Thane",
    link: "https://caddcentrethane.com/",
  },
  {
    id: 5,
    type: "image",
    imagesUrl: Pr5.src,
    category: "Web",
    title: "Doordash",
    link: "https://www.doordash.com/",
  },
  {
    id: 10,
    type: "image",
    imagesUrl: Pr11.src,
    category: "Web",
    title: "LITTLE FLOWER CHILDREN SCHOOL, MAU",
    link: "http://www.lfcsmau.co/",
  },
  {
    id: 8,
    type: "image",
    imagesUrl: Pr8.src,
    category: "Web",
    title: "Staples",
    link: "https://www.staples.com/",
  },
  {
    id: 8,
    type: "image",
    imagesUrl: Pr12.src,
    category: "Web",
    title: "Urbanladder",
    link: "https://www.urbanladder.com/",
  },
  {
    id: 9,
    type: "image",
    imagesUrl: Pr13.src,
    category: "Web",
    title: "Femmella",
    link: "https://www.femmella.com/",
  },
  {
    id: 10,
    type: "image",
    imagesUrl: Pr14.src,
    category: "Web",
    title: "Printshop",
    link: "https://www.printshop.com/",
  },
  {
    id: 13,
    type: "image",
    imagesUrl: Pr18.src,
    category: "Web",
    title: "The Clothing Factory",
    link: "https://theclothingfactory.in/",
  },
  {
    id: 6,
    type: "image",
    imagesUrl: Pr6.src,
    category: "Web",
    title: "Epitome-RBS",
    link: "http://epitome-rbs.com/",
  },
  {
    id: 7,
    type: "image",
    imagesUrl: Pr7.src,
    category: "Web",
    title: "Orcollective",
    link: "https://orcollective.co.uk/",
  },
  {
    id: 9,
    type: "image",
    imagesUrl: Pr9.src,
    category: "Web",
    title: "Target",
    link: "https://www.target.com/",
  },
  {
    id: 10,
    type: "image",
    imagesUrl: Pr10.src,
    category: "Web",
    title: "DIY Mumbai",
    link: "https://diyguru-mumbai.org/",
  },
  {
    id: 4,
    type: "image",
    imagesUrl: Pr4.src,
    category: "Web",
    title: "Cabelo Chave",
    link: "https://cabelochave.com/",
  },
  {
    id: 11,
    type: "image",
    imagesUrl: Pr16.src,
    category: "Web",
    title: "Happy Brews",
    link: "https://happybrews.co.in/",
  },
  {
    id: 12,
    type: "image",
    imagesUrl: Pr17.src,
    category: "Web",
    title: "Sanjivnee Healing",
    link: "https://sanjivneehealing.com/",
  },
  //   {
  //     id: 18,
  //     type: "image",
  //     imagesUrl: Pr9.src,
  //     category: "Print & Packaging",
  //   },
  //   {
  //     id: 19,
  //     type: "image",
  //     imagesUrl: Pr10.src,
  //     category: "Print & Packaging",
  //   },
  //   {
  //     id: 20,
  //     type: "image",
  //     imagesUrl: Pr11.src,
  //     category: "Print & Packaging",
  //   },
  //   {
  //     id: 21,
  //     type: "image",
  //     imagesUrl: Pr12.src,
  //     category: "Print & Packaging",
  //   },

  //   {
  //     id: 22,
  //     type: "video",
  //     videoUrl: "https://www.youtube.com/embed/OZ9SDm3lPn8",
  //     category: "reels",
  //   },

  //   {
  //     id: 23,
  //     type: "video",
  //     videoUrl: 'https://www.youtube.com/embed/A4M1nWVAOQQ',
  //     category: "reels",
  //   },

  //   {
  //     id: 24,
  //     type: "video",
  //     videoUrl: 'https://www.youtube.com/embed/6hmb37ircHo',
  //     category: "reels",
  //   },

  //   {
  //     id: 25,
  //     type: "video",
  //     videoUrl: "https://www.youtube.com/embed/hLxltxtLGsw",
  //     category: "reels",
  //   },

  //   {
  //     id: 26,
  //     type: "video",
  //     videoUrl: "https://www.youtube.com/embed/Sc6UNBemC3c",
  //     category: "reels",
  //   },

  //   {
  //     id: 27,
  //     type: "video",
  //     videoUrl: "https://www.youtube.com/embed/fVNR25FvE_Q",
  //     category: "reels",
  //   },
  //   {
  //     id: 28,
  //     type: "image",
  //     imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/2__6_.jpg?updatedAt=1682602425931",
  //     category: "brand",
  //   },

  //   {
  //     id: 29,
  //     type: "image",
  //     imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/1__3_.jpg?updatedAt=1682601964160",
  //     category: "brand",
  //   },

  //   {
  //     id: 30,
  //     type: "image",
  //     imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/1__4_.jpg?updatedAt=1682601964160",
  //     category: "brand",
  //   },

  //   {
  //     id: 31,
  //     type: "image",
  //     imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/3__2_.jpg?updatedAt=1682601964180",
  //     category: "brand",
  //   },

  //   {
  //     id: 32,
  //     type: "image",
  //     imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/1__2___1_.jpg?updatedAt=1682601964157",
  //     category: "brand",
  //   },

  //   {
  //     id: 33,
  //     type: "image",
  //     imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/1__5_.jpg?updatedAt=1682601964185",
  //     category: "brand",
  //   },
  //   {
  //     id: 34,
  //     type: "image",
  //     imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/5__1_.jpg?updatedAt=1682602425847",
  //     category: "brand",
  //   },

  //   {
  //     id: 35,
  //     type: "image",
  //     imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/3__1_.jpg?updatedAt=1682602425880",
  //     category: "brand",
  //   },

  //   {
  //     id: 36,
  //     type: "image",
  //     imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/3__5_.jpg?updatedAt=1682602425890",
  //     category: "brand",
  //   },
  //   {
  //     id: 37,
  //     type: "video",
  //     videoUrl: "https://www.youtube.com/embed/_wPXOrzwERk?si=sh6AektxhWprfBwT",
  //     category: "Night Club Shoot",
  //   },
  //   {
  //     id: 38,
  //     type: "video",
  //     videoUrl: "https://www.youtube.com/embed/KO6RTpW6wOY?si=MOEFiGvxXn6k9WgD",
  //     category: "Night Club Shoot",
  //   },
  //   {
  //     id: 39,
  //     type: "video",
  //     videoUrl: "https://www.youtube.com/embed/meZyRF6aJ9U?si=34Q53My64-f_Aj78",
  //     category: "Night Club Shoot",
  //   },
  //   {
  //     id: 34,
  //     type: "video",
  //     videoUrl: "https://www.youtube.com/embed/ACSxYu_r1Bk?si=lbSZerL00vVqA7PR",
  //     category: "Night Club Shoot",
  //   },



];

function WebDesign() {
  const [category, setCategory] = React.useState("Web");
  const filteredData = category === "" ?
    data : data.filter((item) => item.category === category);

  const [active, setActive] = React.useState(false);

  // const handleClick = () => {
  //   setButtonClass('Filterbtnactive');
  // };





  const handleCategoryChange = (category) => {
    setCategory(category);
  };
  return (
    <div>
      {/* <div className="ButtonGrid">
        <button className={category === 'brand' ? 'Filterbtnactive1' : 'Filterbtn1'} onClick={() => handleCategoryChange("brand")}>Creative Banners</button>
        <button className={category === 'Web' ? 'Filterbtnactive2' : 'Filterbtn2'} onClick={() => handleCategoryChange("Web")}>WebDesign</button>
        <button className={category === 'Photograph' ? 'Filterbtnactive3' : 'Filterbtn3'} onClick={() => handleCategoryChange("Photograph")}>Photograph</button>
        <button className={category === 'reels' ? 'Filterbtnactive4' : 'Filterbtn4'} onClick={() => handleCategoryChange("reels")}>Reels</button>
        <button className={category === 'Print & Packaging' ? 'Filterbtnactive5' : 'Filterbtn5'} onClick={() => handleCategoryChange("Print & Packaging")}>Print & Packaging</button>
        <button className={category === 'Night Club Shoot' ? 'Filterbtnactive5' : 'Filterbtn5'} onClick={() => handleCategoryChange("Night Club Shoot")}>Night Club Shoot</button>
      </div> */}

      <div className="WebsiteGrid">
        {filteredData.map((item) => {
          if (item.type === "image" && item.category === "brand" || item.category === "brand" || item.category === "Photograph" || item.category === "Print & Packaging") {
            return <Image key={item.id} src={item.imagesUrl} alt="" className="imgResponsive" />;
          } else if (item.type === "images" || item.category === "Web") {
            return (
              <>
                <div className='website-title'>
                  <a href={item.link}>
                    <Image key={item.id} src={item.imagesUrl} alt="" className="GridimgResponsiveWebsite" />
                    <Title>{item.title}</Title>
                  </a>
                </div>
              </>);
          } else if (item.type == "video") {
            return (
              <>
                <iframe
                  key={item.id}
                  src={item.videoUrl}
                  className="VideoResponsive embeddedvideo"
                  title="Embedded YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </>
            );
          }
        })}
      </div>
    </div>
  )
}

export default WebDesign


// "use client";
// import React from "react";
// import { Image } from "react-bootstrap";
// import Title from "../Reuseable/Title";

// import Pr1 from "@/assets/images/projects/r1.jpg";
// import Pr2 from "@/assets/images/projects/r2.jpg";
// import Pr3 from "@/assets/images/projects/r3.jpg";
// import Pr4 from "@/assets/images/projects/r4.jpg";
// import Pr5 from "@/assets/images/projects/r5.jpg";
// import Pr6 from "@/assets/images/projects/r6.jpg";
// import Pr7 from "@/assets/images/projects/r7.jpg";
// import Pr8 from "@/assets/images/projects/r8.jpg";
// import Pr9 from "@/assets/images/projects/r9.jpg";
// import Pr10 from "@/assets/images/projects/r10.jpg";
// import Pr11 from "@/assets/images/projects/r11.jpg";
// import Pr12 from "@/assets/images/projects/r12.jpg";
// import Pr13 from "@/assets/images/projects/r13.jpg";
// import Pr14 from "@/assets/images/projects/r14.jpg";
// import Pr15 from "@/assets/images/projects/r15.jpg";
// import Pr16 from "@/assets/images/projects/r16.jpg";
// import Pr17 from "@/assets/images/projects/r17.jpg";
// import Pr18 from "@/assets/images/projects/r18.png";

// function WebDesign() {
//   const data = [
//     { id: 1, img: Pr1, title: "Sri Krishna College of Engineering and Technology" },
//     { id: 2, img: Pr2, title: "Cairn Group of Hotels" },
//     { id: 3, img: Pr3, title: "Spencer Realty LLC" },
//     { id: 4, img: Pr4, title: "CondoReviews" },
//     { id: 5, img: Pr5, title: "Happy Brews" },
//     { id: 6, img: Pr6, title: "Epitome-RBS" },
//     { id: 7, img: Pr7, title: "Orcollective" },
//     { id: 8, img: Pr8, title: "Staples" },
//     { id: 9, img: Pr9, title: "Target" },
//     { id: 10, img: Pr10, title: "DIY Mumbai" },
//     { id: 11, img: Pr11, title: "LITTLE FLOWER CHILDREN SCHOOL, MAU" },
//     { id: 12, img: Pr12, title: "Urbanladder" },
//     { id: 13, img: Pr13, title: "Femmella" },
//     { id: 14, img: Pr14, title: "Printshop" },
//     { id: 15, img: Pr15, title: "Cadd Centre Thane" },
//     { id: 16, img: Pr16, title: "Happy Brews" },
//     { id: 17, img: Pr17, title: "Sanjivnee Healing" },
//     { id: 18, img: Pr18, title: "The Clothing Factory" },
//   ];

//   // background colors in same pastel tone sequence
//   const bgColors = [
//     "#E7F1ED",
//     "#FAE9E1",
//     "#F3EDDD",
//     "#F5F9E9",
//     "#F9EAEF",
//     "#F3EFE5",
//     "#EAF7F3",
//     "#FAF0E4",
//   ];

//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//         gap: "1.5rem",
//         padding: "2rem 0",
//         justifyItems: "center",
//       }}
//     >
//       {data.map((item, index) => (
//         <div
//           key={item.id}
//           style={{
//             width: "100%",
//             background: bgColors[index % bgColors.length],
//             borderRadius: "18px",
//             padding: "1.5rem",
//             textAlign: "center",
//             transition: "all 0.3s ease",
//             boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = "translateY(-5px)";
//             e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.15)";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = "translateY(0)";
//             e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.08)";
//           }}
//         >
//           {/* Tags */}
//           <div
//             style={{
//               display: "flex",
//               flexWrap: "wrap",
//               justifyContent: "flex-start",
//               gap: "0.5rem",
//               marginBottom: "1.2rem",
//             }}
//           >
//             <span
//               style={{
//                 background: "#fff",
//                 color: "#333",
//                 fontSize: "13px",
//                 padding: "4px 10px",
//                 borderRadius: "50px",
//                 boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
//               }}
//             >
//               WordPress Website Development
//             </span>
//             <span
//               style={{
//                 background: "#fff",
//                 color: "#333",
//                 fontSize: "13px",
//                 padding: "4px 10px",
//                 borderRadius: "50px",
//                 boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
//               }}
//             >
//               UI / UX Strategy
//             </span>
//           </div>

//           {/* Image */}
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               height: "180px",
//               marginBottom: "1rem",
//             }}
//           >
//             <Image
//               src={item.img.src}
//               alt={item.title}
//               style={{
//                 maxWidth: "80%",
//                 height: "auto",
//                 objectFit: "contain",
//               }}
//             />
//           </div>

//           {/* Title */}
//           <h5
//             style={{
//               fontSize: "15px",
//               fontWeight: "500",
//               color: "#111",
//               lineHeight: "1.4",
//               marginTop: "0.5rem",
//             }}
//           >
//             Website Development for{" "}
//             <span
//               style={{
//                 display: "block",
//                 fontWeight: "600",
//                 color: "#222",
//               }}
//             >
//               {item.title}
//             </span>
//           </h5>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default WebDesign;
