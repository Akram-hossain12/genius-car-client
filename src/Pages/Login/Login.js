import React, { useContext, useState } from 'react';
import logImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const {userLogin}=useContext(AuthContext);

    const [users,setUsers]=useState({});
    
    const loginHendaler = event=>{
        event.preventDefault();
        const form=event.target;
        const email=users.email;
        const password =users.password;
        form.reset()
        userLogin(email,password)
        .then(result=>{
            const user =result.user;
            console.log(user)
        })
        .catch(err=>console.error(err))
    }
    const inputLoginBlur = event =>{
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
                        <h1 className="text-4xl text-center font-bold">Login</h1>
                        <form onSubmit={loginHendaler}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onBlur={inputLoginBlur } name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onBlur={inputLoginBlur} name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-red-600">Login</button>
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
                        <span className='text-center mt-4'>Don't Have an account? <Link to='/signup' className='text-red-500'>  Sign up</Link></span>
                    </div>

                </div>

                <div className="w-1/2">
                    <img src={logImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;