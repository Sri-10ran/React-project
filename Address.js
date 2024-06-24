import React from 'react';
import './Address.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Address() {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer className="footer bg-dark text-light py-5">
                <div className="container my-2" id="contact">
                    <div className="row">
                        {/* Logo Section */}
                        <div className="col-lg-4 col-md-6 mb-4 text-center text-lg-left">
                            <div className="ace">
                                <img src="logo.png" alt="Laundryes" className="img-fluid mb-1 logo" style={{marginLeft:'76px'}}/>
                                <p className="justified-text" style={{ fontFamily: 'Josefin Sans', fontSize: '17px', fontWeight: '552' }}>
                                    This template is a micro niche for business categories, namely laundry business.
                                    There was an excess of this template is using adobe muse making it easier to edit,
                                    add content, and without having to use the coding in the edit.
                                </p>
                                <div className="social-icons d-flex justify-content-start">
                                    <a href="#"><i className="fab fa-facebook me-2"></i></a>
                                    <a href="#"><i className="fab fa-twitter me-2"></i></a>
                                    <a href="#"><i className="fab fa-square-x-twitter me-2"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* Quick Links Section */}
                        <div className="col-lg-4 col-md-6 mb-4 text-center">
                            <div className="quick-links">
                                <h2 style={{ fontSize: '24px', fontWeight: '580', fontFamily: 'Poppins', color: '#349bc6' }}>Quick Links</h2>
                                <ul className="list-unstyled" style={{ fontFamily: 'Josefin Sans', fontSize: '18px', fontWeight: '552' }}>
                                    <li><a href="#home" className="text-light">Home</a></li>
                                    <li><a href="#about" className="text-light">About</a></li>
                                    <li><a href="#services" className="text-light">Services</a></li>
                                    <li><a href="#pricing" className="text-light">Pricing</a></li>
                                    <li><a href="#faq" className="text-light">FAQ</a></li>
                                    <li><a href="#contact" className="text-light">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* Contact Section */}
                        <div className="col-lg-4 col-md-12 mb-4 text-center text-lg-left">
                            <div className="contact">
                                <h2 style={{ fontSize: '24px', fontWeight: '580', fontFamily: 'Poppins', color: '#349bc6' }}>Contact</h2>
                                <ul className="list-unstyled text-light" style={{ fontFamily: 'Josefin Sans', fontSize: '18px', fontWeight: '552' }}>
                                    <li className="contact-item"><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;N.R.K.R Road, near Reg.Office,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sivakasi - 626124.</li>
                                    <li className="contact-item"><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;+91 12345 67890</li>
                                    <li className="contact-item"><i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;<a href="mailto:acefolds14@gmail.com" className="text-light">laundryes@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="bottom bg-dark py-3 text-center" style={{ color: 'white' }}>
         
                <p className="mb-0" style={{fontFamily:'DM Sans',fontSize:'19px',fontWeight:'600'}}>&copy; {currentYear} Laundryes.</p>
               
                <p  style={{fontFamily:'DM Sans',fontSize:'16px',fontWeight:'600'}}>All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Address;
