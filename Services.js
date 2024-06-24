import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css'

const Services = () => {
    const services = [
        {
            imgSrc: "washiron.png",
            title: "Wash and Iron",
            description: "Our Wash and Iron service ensures your clothes are thoroughly cleaned and crisply ironed, ready for you to wear. From everyday shirts to delicate blouses, we handle each item with care, delivering wrinkle-free and fresh-smelling garments every time."
        },
        {
            imgSrc: "dry.jpg",
            title: "Dry Cleaning",
            description: "Specialized in treating delicate fabrics, our Dry Cleaning service removes tough stains and odors while preserving the quality of your garments. Ideal for suits, dresses, and other special clothing, we ensure your items are returned clean and perfectly pressed."
        },
        {
            imgSrc: "https://awnstailoring.com/wp-content/uploads/2023/05/t.png",
            title: "Garment Repairs and Alterations",
            description: "Our Garment Repairs and Alterations service helps extend the life of your favorite clothes. Whether you need a hem adjusted, a zipper replaced, or a tear mended, our skilled tailors will restore your garments to their best condition."
        },
        {
            imgSrc: "https://grannywisdoms.com/wp-content/uploads/2023/09/white-shoes-cleaning.png",
            title: "Shoe Cleaning",
            description: "Keep your footwear looking like new with our Shoe Cleaning service. We clean, polish, and restore various types of shoes, from leather to sneakers, ensuring they are returned to you in top shape, ready to complement your wardrobe."
        },
        {
            imgSrc: "https://transform.octanecdn.com/crop/1600x900/https://octanecdn.com/cleanenginesites/cleanenginesites_890228041.jpg",
            title: "Leather and Suede Cleaning",
            description: "Our Leather and Suede Cleaning service provides specialized care for your luxury items. We use gentle, effective cleaning methods to remove stains and renew the look of your leather jackets, suede shoes, and other items, maintaining their natural luster."
        },
        {
            imgSrc: "https://www.wilkinslinen.com/website/wp-content/uploads/2018/11/commercial-laundry-service.jpg",
            title: "Commercial Services",
            description: "We offer comprehensive laundry solutions for businesses, including hotels, restaurants, and spas. Our Commercial Services ensure linens, uniforms, and other items are cleaned to the highest standards, helping your business maintain a professional appearance."
        },
        {
            imgSrc: "https://prod-cdn.laundryheap.com/assets/seo_pages/dry_cleaning/categories/bed-linen-034f58de803861a330971426de0823e77b159e0010d46b4719048263d21f68c9.jpg",
            title: "Bedding and Linens",
            description: "Enjoy the comfort of freshly cleaned Bedding and Linens with our dedicated service. We clean and press sheets, pillowcases, and duvet covers, ensuring they are soft, sanitized, and ready to provide you with a good night's sleep."
        },
        {
            imgSrc: "https://www.theamericanlaundromat.com/img/jersey-city-laundry-services-lg.jpg",
            title: "Emergency and Express Services",
            description: "For those times when you need your laundry done in a hurry, our Emergency and Express Services provide quick turnaround without compromising on quality. Perfect for last-minute events or unexpected spills, we get your garments clean and ready on time."
        },
       
        {
            imgSrc: "https://i0.wp.com/pillowpointers.com/wp-content/uploads/2023/03/needlepoint_pillows_lined_up_2.png?fit=300%2C300&ssl=1",
            title: "Pillow and Cushion Cleaning",
            description: "Our Pillow and Cushion Cleaning service ensures your bedding and furniture accessories are fresh and hygienic. We use specialized cleaning techniques to remove dust, allergens, and stains, providing you with comfortable and clean pillows and cushions."
        }
    ];

    return (
        <div className="container my-5" id="services">
            <br/>
            <br/>
            <br/>
             <h2 className="text-center" style={{ fontSize: '39px', fontWeight: '580' ,fontFamily:'Poppins',color:'#349bc6'}}>Our Services</h2>
           <br/>
            <div className="text-center">
                   <p className="sub-heading mb-4" style={{textAlign:'justify',fontFamily:'Outfit',fontSize:'1rem',color:'#666',lineHeight:'29px'}}>
                    At our laundry service, we believe that the true measure of our success lies in the satisfaction of our customers. We are delighted to share the experiences and feedback from those who have trusted us with their laundry needs. Our testimonials highlight the positive impact our services have had on their lives, from the convenience of doorstep pick-up and delivery to the exceptional care we take with each garment. These stories reflect our commitment to quality, reliability, and customer satisfaction. Read on to discover how we've made laundry day easier and more enjoyable for our valued clients. If you’ve had a great experience with us, we invite you to share your story and join our growing community of happy customers!
               </p>
            </div>

          <br/>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {services.map((service, index) => (
                    <div className="col" key={index}>
                        <div className="card h-100 " style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                            <div className="d-flex align-items-center p-3">
                                <img src={service.imgSrc} alt={service.title} style={{ width: '120px', height: '120px' ,borderRadius:'50%',objectFit:'cover', border: '2px solid #439bc6'}} className="me-3" />
                                <div>
                                    <h5 className="card-title" style={{fontSize:'22px',fontFamily:'Poppins',fontWeight:'630',color:'#439bc6',stroke:''}}>{service.title}</h5>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="card-text " style={{textAlign:'justify',fontFamily:'Josefin Sans',fontWeight:'630',fontSize:'16px',color:'#666'}}>{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      
    );
};

export default Services;
