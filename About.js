import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css';

function About() {
  return (
    <div className="container my-5">
      <br/>
      <br/>
      <br/>
      <h2 className="text-center" style={{ fontSize: '39px', fontWeight: '580', fontFamily: 'Poppins', color: '#349bc6' }}>Why choose us</h2>
      <br/>
      <div className="text-center">
        <p className="sub-heading mb-5" style={{ textAlign: 'justify', fontFamily: 'Outfit', fontSize: '1rem', color: '#666' ,lineHeight:'29px'}}>
          At Ace Folds, as Sivakasi's premier laundry service, we combine years of experience with a commitment to quality, affordability, and customer satisfaction. Our expert care, competitive pricing, and reliable service ensure peace of mind and exceptional results. Trust Ace Folds for all your laundry needs – satisfaction guaranteed. Our expert care, competitive pricing, and reliable service ensure peace of mind and exceptional results. Trust Ace Folds for all your laundry needs – satisfaction guaranteed.
        </p>
      </div>

      <br/>
      <Row className="text-center">
        <Col md={6} lg={3} className="mb-4">
          <i className="fa-solid fa-hand-sparkles" style={{ fontSize: '29px', marginBottom: '12px',backgroundColor:'#439bc6',padding:'19px' ,borderRadius:'50%'}}></i>
          <h2 style={{ fontFamily: 'Poppins', fontSize: '29px' }}>Expert Cleaner</h2>
          <p className="text-center" style={{ textAlign: 'justify', fontSize: '17px', color: '#666', fontFamily: 'Outfit', marginTop: '5px', fontWeight: '600' }}>We give our best work for this template. We make it with love. Our template has a section.</p>
        </Col>
        <Col md={6} lg={3} className="mb-4">
        <i class="fa-solid fa-money-bill-1-wave" style={{ fontSize: '29px', marginBottom: '12px' ,backgroundColor:'#439bc6',padding:'19px',borderRadius:'50%'}}></i>
          <h2 style={{ fontFamily: 'Poppins', fontSize: '29px' }}>Affordable Price</h2>
          <p className="text-center" style={{ textAlign: 'justify', fontSize: '17px', color: '#666', fontFamily: 'Outfit', marginTop: '5px', fontWeight: '600' }}>Our templates are really affordable. You will get free updates.</p>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <i className="fa-solid fa-truck" style={{ fontSize: '29px', marginBottom: '12px' ,backgroundColor:'#439bc6',padding:'19px',borderRadius:'50%'}}></i>
          <h2 style={{ fontFamily: 'Poppins', fontSize: '29px' }}>Express Delivery</h2>
          <p className="text-center" style={{ textAlign: 'justify', fontSize: '17px', color: '#666', fontFamily: 'Outfit', marginTop: '5px', fontWeight: '600' }}>If you purchase this template, you will get free access to every update we launch.</p>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <i className="fa-solid fa-thumbs-up" style={{ fontSize: '29px', marginBottom: '12px',backgroundColor:'#439bc6',padding:'19px',borderRadius:'50%' }}></i>
          <h2 style={{ fontFamily: 'Poppins', fontSize: '29px' }}>Quality of Service</h2>
          <p className="text-center" style={{ textAlign: 'justify', fontSize: '17px', color: '#666', fontFamily: 'Outfit', marginTop: '5px', fontWeight: '600' }}>This is a Muse template. You don’t need to write code and just drag and drop your images.</p>
        </Col>
      </Row>
    </div>
  );
}

export default About;
