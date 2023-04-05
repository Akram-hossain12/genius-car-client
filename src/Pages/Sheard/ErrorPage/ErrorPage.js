import React from 'react';
import errorPage from '../../../assets/ErrorPage/404page.webp'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const ErrorPage = () => {
    return (

        <div>
            <Header></Header>
            <div className='flex justify-center items-center w-full h-[700px]'>

                <div className=''>
                    <img className='' src={errorPage} alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;