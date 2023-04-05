import React from 'react';
import logo1 from '../../../assets/logo.svg';
import { } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer bg-black text-white p-32">
            <div>
                <img src={logo1} alt="" />
                <p> CAR Doctor Industries Ltd.<br />Providing reliable tech since 2023</p>
                <ul>
                    <li><Link></Link></li>
                </ul>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a href="/" className="link link-hover">Branding</a>
                <a href="/" className="link link-hover">Design</a>
                <a href="/" className="link link-hover">Marketing</a>
                <a href="/" className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a href="/" className="link link-hover">About us</a>
                <a href="/" className="link link-hover">Contact</a>
                <a href="/" className="link link-hover">Jobs</a>
                <a href="/" className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href="/" className="link link-hover">Terms of use</a>
                <a href="/" className="link link-hover">Privacy policy</a>
                <a href="/" className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;