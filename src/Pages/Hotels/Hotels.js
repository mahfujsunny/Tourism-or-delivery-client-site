import React, { useEffect, useState } from 'react';
import Hotel from '../Hotel/Hotel';
import './Hotels.css'

const Hotels = (props) => {
const [hotel , setHotel] = useState([]);
    
    useEffect(()=> {
        fetch('./database.json')
        .then(res => res.json())
        .then(data => setHotel(data[0].hotels) )
    },[])

    return (
        <div>
            <h2 className="fs-1 fw-bold text-info m-5 heading-text">Hotels</h2>
            <div className="row">
                
            {
                hotel.map(hotel => <Hotel 
                hotel={hotel}>

                </Hotel>)
            }
            
            </div>
        </div>
    );
};

export default Hotels;