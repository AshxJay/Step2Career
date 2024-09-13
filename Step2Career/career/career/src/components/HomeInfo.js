import React from 'react'
import "./HomeInfo.css"
import Button from 'react-bootstrap/Button';
function HomeInfo() {
  return (
    <div>
      <div className="home-info">
      <div className="text-section">
        <h1>Who We Are Text</h1>
        <p>we believe in guiding you towards a fulfilling career.
          Our team of experts is dedicated to helping you explore your interests, identify your strengths, and navigate the path to your dream job.
          Whether you're a student, recent graduate, or a professional looking to make a career change, we're here to support you every step of the way.</p>
      </div>
      <div className="image-section">
        <img src={require('../img/img1.jpg')} alt="Description" />
      </div>
    </div>
    <div className="home-info">
    <div className="image-section">
        <img src={require('../img/img3.jpg')} alt="Description" />
      </div>
      <div className="text-section">
        <h1>Career Counseling</h1>
        <p>Our one-on-one career counseling services are tailored to your unique needs. 
          We offer personalized advice on career exploration, job search strategies, resume building, and interview preparation.
          Our experienced counselors work with you to develop a clear career plan and provide the support you need to achieve your goals.</p>
      </div>
      
    </div>
    <div className="home-info">
    
      <div className="text-section">
        <h1>Career Resources</h1>
        <p>Access a wealth of resources designed to help you succeed in your career journey. 
          From informative articles and industry insights to resume templates and interview tips, our resource center is your go-to place for valuable information and practical tools.</p>
      </div>
      <div className="image-section">
        <img src={require('../img/img5.png')} alt="Description" />
      </div>
    </div>
    <div className="home-info">
    <div className="image-section">
        <img src={require('../img/img4.png')} alt="Description" />
      </div>
      <div className="text-section">
        <h1>Mentorship Programs</h1>
        <p>Our mentorship programs pair you with experienced professionals who provide guidance, support, and insights into your chosen field. 
          Whether you're looking for career advice, networking opportunities, or industry knowledge, our mentors are here to help you grow and succeed.</p>
      </div>
      
    </div>
    <div className="home-info join">
    
      <div className="text-section button">
        <h1>Ready to Shape Your Future?</h1>
        <p>Join our community today and take the first step towards achieving your career goals. Our expert team is here to guide you every step of the way. Don’t wait – start your journey with us now!</p>
        <Button >Join Now</Button>
      </div>
      <div className="image-section">
        <img src={require('../img/img6.png')} alt="Description" />
      </div>
    </div>
    </div>
  )
}

export default HomeInfo
