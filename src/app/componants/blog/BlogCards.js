// components/BlogCards.js
"use client";
import Link from "next/link";
import React from "react";
import { Col, Image, Row , Container } from "react-bootstrap";
import blogdata from "@/app/data/blogdata";

const { image } = blogdata;

const BlogCards = () => {

  return (
    <>
      <section className="blog-page">
        <Container>
          <Row>
            {blogdata.map((blog) => (
              <Col xl={4} lg={4} className="animated fadeInUp" key={blog.id} >
                <div className="blog-one__single">
                  <div className="blog-one__img">

                    <Image src={require(`@/assets/images/blog/${blog.image}`).default.src} alt="" />

                    <Link href={`/blog/${blog.slug}`}>
                      <span className="blog-one__plus"></span>
                    </Link>
                    <div className="blog-one__date">
                      {/* <p>{date}</p> */}
                    </div>
                  </div>
                  <div className="blog-content">
                    <ul className="list-unstyled blog-one__meta">
                      <li>
                        <Link href={`/blog/${blog.slug}`}>
                          <i className="far fa-user-circle"></i> By
                          {/* {admin} */}
                        </Link>
                      </li>
                      <li>
                        <span>/</span>
                      </li>
                      <li>
                        <Link href={`/blog/${blog.slug}`}>
                          <i className="far fa-comments"></i>
                          {/* {comments}  */}
                          Comments
                        </Link>
                      </li>
                    </ul>
                    <h3 className="blog-one__title">
                      <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </h3>
                    <div className="blog-one__read-btn">
                      <Link href={`/blog/${blog.slug}`}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogCards;
