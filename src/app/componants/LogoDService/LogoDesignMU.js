import React from 'react'
import { Container,Row,Col,Image } from 'react-bootstrap'
import logodesignmu from '@/app/data/logodesignmu'
const { title, tagline, socials, MUImages } = logodesignmu;

function LogoDesignMU({ className = "" }) {
  return (
    <>
    <section className={`MUCOntainer ${className}`}>        
        <Container>
         <h6 className="text-centerMU">about Logo Design MockUp</h6>
        <h1 className="text-centerMU1">Logo Design MockUp Services</h1> 

           

           <div className="MainContainer"> 
           {MUImages.map(({ id, image }) => (
              <div key={id} className="GapimgContainer">
                <Image
                  src={require(`@/assets/images/Mockup/${image}`).default.src}
                  alt=""
                  className="Gapimag"
                  />

              </div>
           ))}    
           </div>
          </Container> 
          </section>
    </>
  )
}

export default LogoDesignMU 