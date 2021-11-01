

import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Addplace.css';

const Addplace = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data)

    axios.post('https://intense-taiga-74741.herokuapp.com/services', data )
    .then(res => {
      if(res.data.insertedId){
        alert("inserted Successfullly");
        reset();
      }
    })
  };

    return (
        <div  className="addplace-styles">
          <h2>Please Add a Services</h2>  
           <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name", { required: true, maxLength: 40 })} placeholder="Name"/>
                 <br />
                
                 <input type="number" {...register("price")} required />
                 <br />
                 <input {...register("Duration", { required: true, maxLength: 20 })} placeholder="Duration"/>
                 <br />
                 <input {...register("img")} placeholder="Image URL"/>
                 <br />
                 <textarea {...register("description")} placeholder="Desciption"/>
                 <br />
                 <input type="submit" />
              </form>
        </div>
    );
};

export default Addplace;