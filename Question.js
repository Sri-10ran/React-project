import React, { useState } from 'react';
import './Question.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Question = () => {
    // State to manage visibility of each answer
    const [showAns1, setShowAns1] = useState(false);
    const [showAns2, setShowAns2] = useState(false);
    const [showAns3, setShowAns3] = useState(false);
    const [showAns4, setShowAns4] = useState(false);
    const [showAns5, setShowAns5] = useState(false);
    const [showAns6, setShowAns6] = useState(false);

    // Function to toggle visibility
    const toggleAnswer = (answerIndex) => {
        switch (answerIndex) {
            case 1:
                setShowAns1(!showAns1);
                break;
            case 2:
                setShowAns2(!showAns2);
                break;
            case 3:
                setShowAns3(!showAns3);
                break;
            case 4:
                setShowAns4(!showAns4);
                break;
            case 5:
                setShowAns5(!showAns5);
                break;
            case 6:
                setShowAns6(!showAns6);
                break;
            default:
                break;
        }
    };

    return (
        <div className="container my-5" id="faq">
            <br/>
            <br/>
            <br/>

        <h2 className="text-center mb-4" style={{ fontSize: '39px', fontWeight: '580', fontFamily: 'Poppins', color: '#349bc6' ,textAlign:'center'}}>F.A.Q</h2>

        <p style={{textAlign:'center',fontFamily:'Josefin Sans',fontSize:'19px',fontWeight:'700',color:'#430A5D'}}>Know more about Ace Folds - infamous laundry service provider in Sivakasi.</p>

        <div className="text-center">
            <p className="sub-heading mb-4" style={{textAlign:'justify',fontFamily:'Outfit',fontSize:'1rem',color:'#666',lineHeight:'31px'}}>
                At our laundry service, we believe that the true measure of our success lies in the satisfaction of our customers. We are delighted to share the experiences and feedback from those who have trusted us with their laundry needs. Our testimonials highlight the positive impact our services have had on their lives, from the convenience of doorstep pick-up and delivery to the exceptional care we take with each garment. These stories reflect our commitment to quality, reliability, and customer satisfaction. Read on to discover how we've made laundry day easier and more enjoyable for our valued clients. If you’ve had a great experience with us, we invite you to share your story and join our growing community of happy customers!
            </p>
        </div>

            <hr />
            <div className="qes">
                <p id="qes1" onClick={() => toggleAnswer(1)}>How much it will take to wash your clothes</p>
                <div className={`answer ${showAns1 ? 'show' : 'hide'}`} id="ans1">
                    For Wash & Fold, it takes up to 48 hours. while, for Wash & Iron, it takes anywhere between 2-3 days. These are standard delivery timings; however, it may take slightly longer due to factors beyond operational control.
                </div>

                <p id="qes2" onClick={() => toggleAnswer(2)}>How to get my clothes washed urgently..?</p>
                <div className={`answer ${showAns2 ? 'show' : 'hide'}`} id="ans2">
                    We provide an emergency service where you can get your clothes washed and ironed or washed and folded on the same day. However, an express service charge is levied for such urgent orders.
                </div>

                <p id="qes3" onClick={() => toggleAnswer(3)}>Do I need to sort my clothes before sending to you..?</p>
                <div className={`answer ${showAns3 ? 'show' : 'hide'}`} id="ans3">
                    You do not need to sort your clothes. We encourage you to provide care instructions for special garments, however, our expert team is well-versed with the process of sorting. They will look after the sorting process for your garments. We expect you to inform about colour bleed possibilities, because we do not take responsibility for the same.
                </div>

                <p id="qes4" onClick={() => toggleAnswer(4)}>Do you use fresh water for my laundry..?</p>
                <div className={`answer ${showAns4 ? 'show' : 'hide'}`} id="ans4">
                    Yes. At UClean, we are obsessed with Quality and Hygiene. We use fresh water for every wash cycle.
                </div>

                <p id="qes5" onClick={() => toggleAnswer(5)}>Do you use harsh detergents..?</p>
                <div className={`answer ${showAns5 ? 'show' : 'hide'}`} id="ans5">
                    No. we use PH neutral and eco-friendly detergents for washing. In fact, we have different detergent compositions for different garment types. The process is gentle on your clothes, and we believe in treating your clothes with utmost care.
                </div>

                <p id="qes6" onClick={() => toggleAnswer(6)}>Do you take guarantee of my clothes color bleeding...?</p>
                <div className={`answer ${showAns6 ? 'show' : 'hide'}`} id="ans6">
                    Our team makes informed sorting decision based on their experience. However, it is not possible to check every garment for colour bleeding in bulk washing. Thus, we always advise our customers to check for colour bleed and inform our store team about the same. We do not take responsibility for damages due to colour bleed.
                </div>
            </div>
        </div>
       
    );
};

export default Question;
