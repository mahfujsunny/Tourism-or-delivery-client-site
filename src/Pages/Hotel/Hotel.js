import React from 'react';

const Hotel = (props) => {
    const {name , image, price} = props.hotel

    return (
            <div className="col-md-3 col-6 ">
                <div className="card custom-style">
                    <img src={image}className="card-img-top" alt="..."/>
                    <div className="card-body">
                     <h5 className="card-title text-danger fs-2 fw-bold">{name}  </h5>
                     <p>{price}</p>
                    </div>
                    <button>Book</button>
                </div>
            </div>
    );
};

export default Hotel;