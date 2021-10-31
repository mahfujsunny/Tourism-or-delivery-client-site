import React from 'react';
import './About.css'
import photo from '../../images/about.png';

const About = () => {
    return (
        <div>
        <div className="about">
            <h2>.</h2>
        </div>
            <div className="row about-section">
                <div className="col-md-6 col-12 about-img">
                    <img src={photo} alt="" />
                </div>
                <div className="col-md-6 col-12">
                    <h5>About Travel____</h5>
                    <h2>The Best Travel Agency Company.</h2>
                    <p>Discovery Tours and Logistic is a reputed name in the field of tourism industry in Bangladesh since 2001. We are the pioneer and specialized in the field of inbound and outbound tour packages, visa and ticket processing, Star Cruise, domestic and international hotel booking worldwide services. Discovery Tours and Logistic started its journey in the year 2001 and since then we have established a solid branding and earned good reputation from many top level companies and organizations.</p>
                </div>
            </div>
        
        </div>
    );
};

export default About;