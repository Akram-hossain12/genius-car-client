import React, { useContext, useState } from 'react';
import logImg from '../../assets/images/login/login.svg';
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import  { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
     const {createUser}=useContext(AuthContext)
    const [users,setUsers]=useState({});
    const signupHendelar=event =>{
        event.preventDefault();
        const form=event.target;
        const email = users.email;
        const password = users.password;
         form.reset()
         createUser(email,password)
         .then(result=>{
            const user = result.user;
            console.log(user)
         })
         .catch(error=>console.error(error))

        // console.log(email,password)
        // console.log(users)
    }
    const inputBlur = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUsers ={...users};
         newUsers[field]=value;
        setUsers(newUsers)
       
    }

    return (
        <div className=" mt-6 mb-6 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card  w-1/2 max-w-lg shadow-2xl  mt-12 mb-12">
                    <div className="card-body p-12">
                        <h1 className="text-4xl text-center font-bold">Sgin Up</h1>

                        <form onSubmit={signupHendelar}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your name</span>
                                </label>
                                <input onBlur={inputBlur} name='name' type="text" placeholder="name" className="input input-bordered" required/>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onBlur={inputBlur} name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onBlur={inputBlur} name='password' type="password" placeholder="password" className="input input-bordered" required/>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  bg-red-600">Sign Up</button>
                            </div>

                        </form>
                        <div className='text-center'>
                            <p>Or sign up with.</p>
                            <ul className='flex justify-center items-center mt-4'>
                                <li className='mx-4 text-center relative bg-slate-200 w-12 h-12 rounded-full' > <Link><FaFacebook className='absolute text-blue-600 text-2xl left-3 top-3'></FaFacebook></Link></li>
                                <li className='mx-4 text-center relative bg-slate-200 w-12 h-12 rounded-full'> <Link ><FaLinkedin className='absolute text-cyan-600 text-2xl left-3 top-3'></FaLinkedin></Link></li>
                                <li className='mx-4 text-center relative bg-slate-200 w-12 h-12 rounded-full'> <Link><FaGoogle className='absolute text-green-600 text-2xl left-3 top-3'></FaGoogle></Link></li>

                            </ul>
                        </div>
                        <span className='text-center mt-4'>Already have an account? <Link to='/login' className='text-red-500'> Login</Link></span>
                    </div>
                </div>

                <div className="w-1/2">
                    <img src={logImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;