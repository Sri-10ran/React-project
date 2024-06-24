/*import Button from 'react-bootstrap/Button';
import './Home.css'
function Home(){
    return(
        <div>
            <div className="Home">
                <div className="left">
                   <p>We are the Best laundry service providers from Sivakasi.</p>
                   <p>This template is using adobe muse making it easier to edit, add content, </p> 
                   <p>and without having to use the coding in the edit</p>
                   <Button variant="primary">Learn more</Button>{' '}
                </div>
             
               
            </div>
            <div className='details'>
                    <div className='rows'><h2>Have questions?Call</h2><h1>+91 12345 67890</h1></div>
                    <div className='rows'><h2>We are open from</h2><h1>Monday - Saturday(7am - 7pm)</h1></div>
                    <div className='rows'><h2>Need support?Drop mail to</h2><h1>acefolds12@gmail.com</h1></div>
                </div>
        </div>
    );
}
export default Home;*/






/*import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';

function Home() {
  return (
    <Container fluid className="p-0">
      <div className="Home d-flex align-items-center text-light text-center text-md-start">
        <Container className="py-5">
          <Row className="justify-content-center justify-content-md-start">
            <Col md={6}>
              <div className="left bg-transparent bg-opacity-50 p-4 rounded" >
                <p style={{fontSize:'22px',fontWeight:'800'}}>WE ARE THE BEST LAUNDRY SERVICE PROVIDERS FROM SIVAKASI.</p>
                <p style={{fontSize:'18px',fontWeight:'500'}}>This template is using Adobe Muse making it easier to edit, add content,and without having to use the coding in the edit.</p>
              
                <Button variant="primary" style={{backgroundColor:'white',border:'none',color:'#51b8e3',fontSize:'16px',fontWeight:'750',letterSpacing:'0.5px',}}>LEARN MORE</Button>
              </div>
            </Col>
          </Row>
          
          <Container className="details text-center py-4" >
        <Row>
          <Col md={4} className="mb-4 mb-md-0"  style={{backgroundColor:'#161D6F',borderRight: '0.5px solid white'}}>
            <h2 style={{fontSize:'19px',textAlign:'center'}}>Have questions? Call</h2>
            <h1 style={{fontSize:'29px',textAlign:'center'}}>+91 12345 67890</h1>
          </Col>
          <Col md={4} className="mb-4 mb-md-0" style={{backgroundColor:'#430A5D',borderRight: '0.5px solid white'}}>
            <h2 style={{fontSize:'19px',textAlign:'center'}}>We are open from</h2>
            <h1 style={{fontSize:'27px',textAlign:'center'}}>Monday - Saturday (7am - 7pm)</h1>
          </Col>
          <Col md={4}  className="mb-4 mb-md-0" style={{backgroundColor:'#C70039'}}>
            <h2 style={{fontSize:'19px',textAlign:'center'}}>Need support? Drop mail to</h2>
            <h1 style={{fontSize:'29px',textAlign:'center'}}>acefolds12@gmail.com</h1>
          </Col>
        </Row>
      </Container>
        </Container>
        
      </div>
      
     
    </Container>
  );
}

export default Home;
*/





import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';

function Home() {
  return (
    <Container fluid className="p-0">
      <div className="Home d-flex align-items-center text-light text-center text-md-start" id="home"style={{ minHeight: '88vh', backgroundImage: ' url("homeslide.jpg")', backgroundSize: 'cover', backgroundPosition: 'center',marginTop:'5px' }}>
        <Container className="py-5">
          <Row className="justify-content-center justify-content-md-start">
            <Col md={6}>
              <div className="left bg-transparent bg-opacity-50 p-4 rounded" style={{ marginTop: '2px' }}>

                <p style={{ fontSize: '24px', fontWeight: '930',fontFamily:'Nunito',letterSpacing:'0.2px' }}>WE ARE THE BEST LAUNDRY SERVICE PROVIDERS FROM SIVAKASI.</p>
                <p style={{ fontSize: '19px', fontWeight: '600' ,fontFamily:'Josefin Sans',letterSpacing:'0.2px'}}>This template is using Adobe Muse making it easier to edit, add content, and without having to use the coding in the edit.</p>
              
              </div>
            </Col>
          
          </Row>
          
         
         
        </Container>
       
      </div>
     
    </Container>
  );
}

export default Home;
