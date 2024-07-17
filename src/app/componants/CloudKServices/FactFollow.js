import React from 'react'
import { Col, Container, Image, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import factfollow from "@/app/data/factfollow";
import * as CgIcon from "react-icons/cg"
const { title, tagline, socials, Facts } = factfollow;

function FactFollow({ className = "" }) {
  return (
    <>
     <section className={`FactsFollow-one ${className}`}>        
        <Container>
            {!className && (
            <Title title={title} tagline={tagline} className="text-center" />
            )}
           <Row>
           {Facts
           .slice(0, className ? undefined : 4)
            .map(({ id, icon, describe }) => (
              <Col key={id} xl={12} lg={12} md={12} className="animated fadeInUp">
                <div className="BoxFact">
                     <CgIcon.CgFileDocument className="BoxFicons"/>
                    <p>{describe}</p> 
                </div>
              </Col>  
              ))}
          </Row>       
      </Container>            
      </section>

 
    </>
  )
}
export default FactFollow
