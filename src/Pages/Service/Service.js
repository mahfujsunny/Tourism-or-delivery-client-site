import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    
    const {name , img, description, price, _id} = props.service
    console.log(props.service);

    return (
            <div className="col-md-6 ">
                <div className="card custom-style">
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                     <h5 className="card-title text-danger fs-2 fw-bold">{name}  </h5>
                     <p className="card-text text-muted">{description}</p>
                    </div>
                    <div className="">
                        <p>${price} / per person</p>
                        
                        
                        <Link to={`/services/${_id}`}>
                            <button className="btn btn-info">Book</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
    );
};

export default Service;