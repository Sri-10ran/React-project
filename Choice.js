import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Choice.css';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Choice = () => {
    return (
        <div className=" container my-5" id="pricing" >
           <br/>
           <br/>
           
            <div className="  container my-5" >
            <section id="how-it-works">
                <Container>
                    
                    <Row className="align-items-center" >
                        
                        <Col xl={6} className="d-flex flex-column align-items-center justify-content-center text-xl-start text-center">
                            <div>
                                <h5 className="sub-heading mb-4" style={{fontFamily:'Poppins',fontSize:'30px',color:'#439bc6'}}>Super Simple, Super Quick </h5>
                             
                                <p style={{fontFamily:'Montserrat',fontWeight:'750',fontSize:'16px',color:'#666'}}>We collect, clean, and deliver your laundry and dry cleaning at your doorstep.</p>
                                <p style={{fontFamily:'Montserrat',fontWeight:'750',fontSize:'15px',color:'#666'}}>Discover <span style={{fontFamily:'Poppins',fontWeight:'750',fontSize:'20px',color:'#439bc6'}}> Laundryes </span> comprehensive range of laundry services.</p>
                                <Button className="main-btn mt-4" style={{backgroundColor:'#008DDA',color:'white',border:'none',padding:'12px',borderRadius:'8px',fontFamily:'Ubuntu',fontSize:'18px',letterSpacing:'0.3px',fontWeight:'570'}} >Get our service Now</Button>
                                  </div>
                                
                         
                
                        </Col>
                        <Col xl={6} className="d-flex align-items-center justify-content-center" style={{marginTop:'24px'}}>
                            <Carousel className="custom-carousel" controls={false} interval={1000}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={`${process.env.PUBLIC_URL}/work1.png`}
                                        alt="First slide"
                                        style={{ height: '320px', objectFit: 'contain' }}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={`${process.env.PUBLIC_URL}/work2.png`}
                                        alt="Second slide"
                                        style={{ height: '320px', objectFit: 'contain' }}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={`${process.env.PUBLIC_URL}/work3.png`}
                                        alt="Third slide"
                                        style={{ height: '320px', objectFit: 'contain' }}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={`${process.env.PUBLIC_URL}/work4.png`}
                                        alt="Fourth slide"
                                        style={{ height: '320px', objectFit: 'contain ' }}
                                    />
                                </Carousel.Item>
                                {/* Add more items as needed */}
                            </Carousel>
                            
                        </Col>
                            </Row>
                </Container>
            </section>
</div>
        </div>
    );
};

export default Choice;
