import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../img/slide1.png';

function Hero() {
  return (
    <div>
      <Carousel>
        {/* First Slide */}
        <Carousel.Item
          interval={1000}
          style={{
            backgroundImage: `url(${slide1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px" // Adjust height as needed
          }}
        >
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item
          interval={500}
          style={{
            backgroundImage: "url('https://via.placeholder.com/1600x500?text=Second+Slide')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px" // Adjust height as needed
          }}
        >
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Third Slide */}
        <Carousel.Item
          style={{
            backgroundImage: "url('https://via.placeholder.com/1600x500?text=Third+Slide')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px" // Adjust height as needed
          }}
        >
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    
    </div>
  )
}

export default Hero
