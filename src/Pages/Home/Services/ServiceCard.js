import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {_id, title, balance, picture } = service;
    return (
        <div className="card  shadow-xl ">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-red-500 font-semibold'>Price: {balance}</p>
                <div className="card-actions justify-end">
                    <Link to={`/chackout/${_id}`}>
                        <button className="text-red-500"><svg xmlns="http://www.w3.org/2000/ svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;