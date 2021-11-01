
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Booking = () => {
    const { user } = useAuth()
    console.log(user)
    const { id } = useParams()
    const [ordered, setOrdered] = useState([])
    const [address, setAddres] = useState({})

    useEffect(() => {
        fetch(`https://intense-taiga-74741.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data[0])
                setOrdered(data[0])
            })
    }, [])


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        setAddres(data)
        reset()
        data.status = 'pending'
        data.email = user.email
        data.orderdPackage = ordered.name
        fetch(`https://intense-taiga-74741.herokuapp.com/services/${id}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result) {
                    alert('Booking Done')
                }
            })
    };

    return (
        <div className='text-center'>

            <div style={{
                border: "1px solid black",
                borderRadius: "20px",
                width: "50%",
                margin: "auto",
                padding: "20px"
            }}>
                <h6>Your Booking Identification No: <span className='text-danger'>{id}</span> </h6>
                <h5>You are confirming the <span className='text-warning'>{ordered.name}</span> package</h5>
                <p>Total cost going to be <p className='fs-3 fw-bolder'>{ordered.bookingFee}</p></p>
            </div>
            {
                address.address ? <h3>Order Details</h3> : ''
            }
            {address.address ?
                <p>Address:{address.address}</p> :
                <h3 className='text-primary bg-info p-3 w-50 mx-auto my-3 rounded'>Please Write your Details</h3>}
            {
                address.name &&
                <p>Name:{address.name} </p>
            }
            {
                address.phoneNumber &&
                <p>Contact:{address.phoneNumber} </p>
            }
            <form onSubmit={handleSubmit(onSubmit)}>

                <input className='m-2' placeholder='Name' {...register("name", { required: true })} /> <br />
                <input className='m-2' placeholder='Phone Number' {...register("phoneNumber", { required: true })} /> <br />
                <input className='m-2' placeholder='Address' {...register("address", { required: true })} />
                <br />


                <input className='btn btn-danger m-2' value='Confirm Booking' type="submit"/>
            </form>
            <Link to='/myOrders' className='my-3 btn btn-success'>See Your Ordered Package</Link>
        </div>
    );
};

export default Booking;