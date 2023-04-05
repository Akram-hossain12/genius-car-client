import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../../assets/logo.svg';


const Header = () => {
    const manuItems = <>

        <li className='hover:text-xl ease-in font-semibold'><Link to='/'>Home</Link></li>
        <li className='hover:text-xl ease-in font-semibold'><Link to='/about'>About</Link></li>
        <li className='hover:text-xl ease-in font-semibold'><Link to='/login'>LogIn</Link></li>
         
    </>
    return (
        <div className="navbar bg-base-200 py-5">
            <div className="navbar-start ml-5">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {manuItems}
                    </ul>
                </div>
                <Link className="  normal-case text-xl">
                    <img src={logo1} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {manuItems}
                </ul>
            </div>
            <div className="navbar-end mr-5">
                <ul className='flex justify-center items-center mr-3'>
                    <li className=''><Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    </Link></li>
                    <li className='ml-5'>
                        <Link>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg></Link>

                    </li>
                </ul>

                <button className="btn  btn-outline btn-error hover:ease-in-out">Appointment</button>
            </div>
        </div>
    );
};

export default Header;