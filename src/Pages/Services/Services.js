import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = (props) => {
    const [service , setService] = useState([]);
    
    useEffect(()=> {
        fetch('./database.json')
        .then(res => res.json())
        .then(data => setService(data[0].services) )
    },[])

    return (
        <div>
            <h2 className="fs-1 fw-bold text-info m-5 heading-text">Services</h2>
            <div className="row">
                
            {
                service.map(service => <Service 
                service={service}>

                </Service>)
            }
            
            </div>
        </div>
    );
};

export default Services;