import React, { useEffect, useState } from 'react';

const Order = ({ order,hendelDelete ,hendelUpdeted}) => {
    const {_id, service_Name, Customer, Email, Phone, service, massege,Amount,stutes } = order;
    const [orderService,setOrderService]=useState({});

    useEffect(()=>{
           fetch(`http://localhost:5000/services/${service}`)
           .then(res=>res.json())
           .then(data=>setOrderService(data))
    },[service])

    const { picture}=orderService;


   

    return (
        <div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <label>
                                    <button onClick={()=>hendelDelete(_id)} className='btn btn-circle'>X</button>
                                </label>
                            </th>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask  w-24 h-24">
                                            <img src={ picture} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Name: {Customer}</div>
                                        <div className="text-sm opacity-50">Phone: {Phone}</div>
                                        <div className="text-sm text-red-600 opacity-50">Amount: {Amount}</div>

                                    </div>
                                </div>
                            </td>

                            <td>
                                {service_Name}
                                <br />
                                <span className="badge badge-ghost badge-sm">{service}</span>
                            </td>
                               <td>Purple</td>
                            <th>
                                <button onClick={()=>hendelUpdeted(_id)}  className="btn btn-error btn-xs">{stutes?stutes:'panding'}</button>
                            </th>

                        </tr>


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Order;