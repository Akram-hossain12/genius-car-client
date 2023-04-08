import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Order from './Order';
import chackImg from '../../assets/images/checkout/checkout.png';
import '../../Pages/Home/Banner/BannerItem.css'

const Orders = () => {
    const { user } = useContext(AuthContext)
    console.log(user?.email)
    const [orders, setOrders] = useState([])
    console.log(orders)
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const hendelDelete =(_id)=>{
        const proceed = window.confirm('you want to delete the order')
      if(proceed){
        fetch(`http://localhost:5000/orders/${_id}`,{
            method:'DELETE'
           })
           .then(res=>res.json())
           .then(data=>{
            if(data.deletedCount>0){
                alert('delete Successfull')
                const remaining = orders.filter(odr=>odr._id !== _id);
                setOrders(remaining)
            }
            console.log(data)
           })
      }
    }

    const hendelUpdeted = _id =>{
        fetch(`http://localhost:5000/orders/${_id}`,{
            method:'PATCH',
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({status:"approved"})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                const remaining = orders.filter(odr=>odr._id !== _id)
                const approving = orders.find(odr=>odr._id === _id)
                approving.status= "approved"
                const newOrders = [approving,...remaining];
                setOrders(newOrders)
            }
        })
    }

    return (
        <div className='mt-10 mb-10'>

                 
            <div className="carousel relative w-full rounded-lg mb-10">
                <div id="item1" className="carousel-item w-full img-gradient">
                    <img alt='/' src={chackImg} className="w-full" />
                </div>

                <div className="absolute flex justify-start  transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <h1 className='text-4xl font-bold text-white ml-12'>Orders Cart Details:<span></span></h1>

                </div>

                <div className="absolute transform -translate-y-1/2 top-[87%] left-1/2 bottom-0">
                    <h1 className='text-xl rounded-t-3xl bg-red-600 px-10 py-3 font-bold text-white'>Home/Orders</h1>

                </div>
            </div>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Cart Details</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
            </div>


            {
                orders.map(order => <Order key={order._id}
                    order={order}
                    hendelDelete={hendelDelete}
                hendelUpdeted={hendelUpdeted}
                >
                </Order>)
            }

        </div>
    );
};

export default Orders;