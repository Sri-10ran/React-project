import React from 'react';
import './Founder.css';  // Ensure other styles are defined here


function Founder() {
    return (
        <div className="container my-5" id="about">
            <br/>
            <br/>
            {/* Header */}
            <p className="text-center" style={{ fontSize: '39px', fontWeight: '580' ,fontFamily:'Poppins',color:'#349bc6'}}>About us</p>
            
            {/* Founder Section */}
            <div className="founder-section">
                <div className="founder-image">
                    <img src="founder.jpg" className="img-fluid" alt="Founder" />
                </div>
                <div className="founder-text" style={{textAlign:'justify',fontFamily:'Outfit',fontSize:'1rem',color:'#666',fontWeight:'579',lineHeight:'25px'}}>
                    <p>
                        This template is a micro niche for business categories, namely laundry business. There was an excess of this template using Adobe Muse, making it easier to edit, add content, and without having to use coding in the edit.

                        This template is designed with a unique and simple style, so that it can promote and provide a solution for the laundry business. This template can be an alternative for entrepreneurs engaged in the laundry business or web developers who need to design websites for laundry business categories.

                        The advantages of this template include being a multipage template consisting of a homepage, about page, services page, pricing page, FAQ page, blog, and contact page. It can describe all the requirements needed for a business website.

                        This template is a micro niche for business categories, namely laundry business. There was an excess of this template using Adobe Muse, making it easier to edit, add content, and without having to use coding in the edit.

                        This template is designed with a unique and simple style, so that it can promote and provide a solution for the laundry business. This template can be an alternative for entrepreneurs engaged in the laundry business or web developers who need to design websites for laundry business categories.

                                 </p>
                </div>
            </div>
<br/>

            {/* Business Section */}
            <div className="business-section">
                <div className="business-item" >
                <i class="fa-solid fa-briefcase" style={{fontSize:'33px',color:'white'}}></i>
                    <h3 style={{fontFamily:'Poppins',fontSize:'23px',fontWeight:'500',marginTop:'5px',color:'white'}}>45 business clients</h3>
                </div>
                <div className="business-item">
                <i class="fa-solid fa-calendar-days" style={{fontSize:'32px',color:'white'}}></i>
                    <h3 style={{fontFamily:'Poppins',fontSize:'23px',fontWeight:'500',marginTop:'5px',color:'white'}}>8+ years experience</h3>
                </div>
                <div className="business-item">
                <i class="fa-solid fa-users" style={{fontSize:'29px',color:'white'}}></i>
                    <h3 style={{fontFamily:'Poppins',fontSize:'23px',fontWeight:'500',marginTop:'5px',color:'white'}}>39 employees</h3>
                </div>
            </div>
        </div>
    );
}

export default Founder;
