import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = (props) => {
    const [service , setService] = useState([]);
    
    useEffect(()=> {
        fetch('https://intense-taiga-74741.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setService(data) )
    },[])

    return (
        <div>
            <h2 className="fs-1 fw-bold text-info m-5 heading-text">Services</h2>
            <div className="row">
                
            {
                service.map(service => <Service
                key = {service.id} 
                service={service}>

                </Service>)
            }
            
            </div>
        </div>
    );
};

export default Services;