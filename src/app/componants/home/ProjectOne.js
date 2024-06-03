'use client';
import projectOne from "@/app/data/projectOne";
import React, { useState, useEffect } from "react";
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
  filterData === "all"
    ? projects
    : projects.filter((project) => project.filter.includes(filterData));

const getCount = (filterData) => getFilteredProjects(filterData).length;

const ProjectOne = ({ projectPage = true }) => {
  const [filter, setFilter] = useState('all');
  const filteredProjects = getFilteredProjects(filter);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [width] = useWindowSize({ fps: 60 });
  const breakpoint = 600;

  // Server-side render placeholder
  if (!isClient) {
    return null;
  }

  return (
    <>
      {width > breakpoint ? (
        <div className="project-one">
          <Container>
            <Row>
              <Col xl={12} md={12} sm={6}>
                <div className="section-title text-center">
                  <div className="section-title__tagline">Recent Projects</div>
                  <h2 className="section-title__title">Work Showcase</h2>
                </div>
                <ul className="project-filter style1 post-filter has-dynamic-filters-counter list-unstyledPF">
                  {filters.map(({ id, name, filterData }) => (
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
          </Container>
        </div>
      ) : (
        <FilterImagesSlider />
      )}
    </>
  );
}

export default ProjectOne;
