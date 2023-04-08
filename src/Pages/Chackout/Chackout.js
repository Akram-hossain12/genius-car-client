import React, { useContext } from 'react';
import chackImg from '../../assets/images/checkout/checkout.png';
import '../../Pages/Home/Banner/BannerItem.css'
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Chackout = () => {
    const  {_id,title,balance} = useLoaderData();
    const {user}= useContext(AuthContext);
    const hendelChackout= event => {
        event.preventDefault();
        const form =event.target;
        const name=`${form.firstName.value} ${form.lastName.value}`;
        const number = form.number.value;
        const email= user?.email || 'unregisterd' ;
        const massege =form.massege.value;
        const order={
              service_Name: title,
              service:_id,
              Customer: name,
              Phone: number,
              
              Email: email,
              massege,
              Amount: balance,
        }
     fetch('http://localhost:5000/orders',{
        method:'POST',
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(order)
     })
     .then(res=>res.json())
     .then(data=>{
         form.reset()
        if(data.acknowledged){
            alert('Order Succsess full pleced')
        }
        console.log(data)
     })
     .catch(err=>console.log(err))

    }
    return (

        <div className='mt-10'>
            <div className="carousel relative w-full rounded-lg">
                <div id="item1" className="carousel-item w-full img-gradient">
                    <img alt='/' src={chackImg} className="w-full" />
                </div>

                <div className="absolute flex justify-start  transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <h1 className='text-4xl font-bold text-white ml-12'>Check Out :<span> {title}</span></h1>

                </div>

                <div className="absolute transform -translate-y-1/2 top-[87%] left-1/2 bottom-0">
                    <h1 className='text-xl rounded-t-3xl bg-red-600 px-10 py-3 font-bold text-white'>Home/Checkout</h1>

                </div>
            </div>
            <form onSubmit={hendelChackout} className='h-auto  w-[1020px] mt-20 mb-20  bg-slate-200'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-7 '>
                    <input name='firstName' type="text" placeholder="First Name" className="input   w-full" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input   w-full" />
                    <input name='number' type="number" placeholder="Phone Number" className="input   w-full" />
                    <input name='email' type="email" defaultValue={user?.email} placeholder="Email" readOnly className="input  w-full" />
                </div>
               <div className='p-7'>
                   <textarea name='massege' className="textarea h-[200px] w-full" type='textarea'   placeholder="Your massege"></textarea>

                   <button type='submit' className='btn btn-lg mt-6 w-full'>Order Confirm</button>
               </div>
            </form>
        </div>

    );
};

export default Chackout;