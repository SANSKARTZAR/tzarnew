'use client';
import Link from "next/link";
import React, { Fragment } from "react";
import { Col } from "react-bootstrap";

const SingleService = ({ service = {} }) => {
  const { title, icon } = service;

  return (
    <Col xl={4} lg={4} className="animated fadeInUp">
      <div className="services-one__single">
        <h3 className="services-one__title">
          <a>
            {title.split("\n").map((t, i) => (
              <Fragment key={i}>
                {t} <br />
              </Fragment>
            ))}
          </a>
        </h3>
        <div className="services-one__icon">
          <span className={icon}></span>
        </div>
        <div className="services-one__count"></div>
      </div>
    </Col>
  );
};

export default SingleService;
