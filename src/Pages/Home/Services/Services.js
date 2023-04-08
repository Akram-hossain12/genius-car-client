import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div className=' mt-20 mb-12'>
            <div className='text-center mb-12'>
                <h1 className='text-red-700 text-xl font-semibold'>Service</h1>
                <h2 className='text-3xl font-bold my-5'>Our Service Area</h2>
                <p className='w-2/4 m-auto text-[#767676]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    services.map(service=><ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='mt-12 flex justify-center'>
               <Link className='btn btn-outline  btn-error'> More Services </Link>
            </div>
        </div>
    );
};

export default Services;