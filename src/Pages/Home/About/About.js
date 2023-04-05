import React from 'react';
import aboutimg1 from '../../../assets/images/about_us/person.jpg';
import aboutimg2 from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero   mt-8 mb-8">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img alt='' src={aboutimg1} className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img alt='' src={aboutimg2} className="border-8 absolute right-5 top-2/4 w-3/5 rounded-lg shadow-2xl" />
                </div>
         
                <div className='ml-8 w-1/2'>
                    <p className='text-xl font-bold text-red-500'>About us</p>
                    <h1 className="text-4xl font-bold mt-5 ">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-3 text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>

                    <p className=' text-xl'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="btn mt-4 bg-red-500">Get More info</button>
                </div>
            </div>
        </div>
    );
};

export default About;