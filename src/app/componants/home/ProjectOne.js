'use client';
import projectOne from "@/app/data/projectOne";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Masonry from "react-masonry-component";
import SingleProject from "./SingleProject";
import Link from "next/link";
import { useWindowSize } from "@react-hook/window-size/throttled";
import FilterImagesSlider from "./ProjectOneSlider/FilterImagesSlider";

const { title, tagline, projects, filters } = projectOne;

const masonryOptions = {
  transitionDuration: 500,
};

const getFilteredProjects = (filterData) =>
  filterData === "filterData"
    ? projects
    : projects.filter((project) => project.filter.includes(filterData));

const getCount = (filterData) => getFilteredProjects(filterData).length;

const ProjectOne = ({ projectPage = true, filterData }) => {
  const [width, height] = useWindowSize({ fps: 60 });
  const breakpoint = 600;
  const [filter, setFilter] = useState('bra');
  const filteredProjects = getFilteredProjects(filter);

  const initialState = {
    filterData: "",
  };

  if (width > breakpoint) {
    return (
      <section className="project-one">
        <div className="container">
          {/* {!projectPage && (
            <Title title={title} tagline={tagline} className="text-center" />
          )} */}

          <Row>
            <Col xl={12} md={12} sm={6}>
              {/* <Title title={title} tagline={tagline} className="text-center" /> */}

              <div className="section-title text-center">
                <div className="section-title__tagline">recent projects</div>
                <h2 className="section-title__title">work showcase</h2>
              </div>
              <ul className="project-filter  style1 post-filter has-dynamic-filters-counter list-unstyledPF">
                {filters
                  .map(({ id, name, filterData }) => (
                    <li
                      key={id}
                      onClick={() => setFilter(filterData)}
                      className={filter === filterData ? "active" : ""}
                    >

                      <span className="filter-text">
                        {name}
                        <span className="count">{getCount(filterData)}</span>
                      </span>
                    </li>
                  ))}
              </ul>
            </Col>
          </Row>
          <Masonry
            options={masonryOptions}
            className="row filter-layout filterGrid position-relative"
          >
            {filteredProjects.map((project) => (
              <SingleProject project={project} key={project.id} />
            ))}
          </Masonry>
          <div className="buttondiv">
            <Link href="/portfolio" className="thm-btn project-page__btnout">
              Discover Our Projects
            </Link>
          </div>
        </div>
      </section>
    )
  }
  return (
    <>
      <FilterImagesSlider />

    </>
  )
}

export default ProjectOne;
