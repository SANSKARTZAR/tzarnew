import React from "react";
import { Image } from "react-bootstrap";

const SingleTestimonial1 = ({ testimonial = {}, listRef }) => {
  const { image } = testimonial;

  return (
    <div
      ref={listRef}
      style={{ userSelect: "none" }}
      className="testimonial-one__singlecard"
    >
      <div className="testimonial-one__contentcard">
        {/* <p className="testimonial-one__textcard">{text}</p> */}
      </div>
      <div className="testimonial-one__client-infocard">
        <div className="testimonial-one__client__imgcard">
          <Image
            src={require(`@/assets/images/testimonial/${image}`).default.src}
            alt=""
            style={{ width: '140px'}}
          />
        </div>
        {/* <h4 className="testimonial-one__namecard">{name}</h4>
        <p className="testimonial-one__titlecard">{title}</p> */}
      </div>
    </div>
  );
};

export default SingleTestimonial1;
