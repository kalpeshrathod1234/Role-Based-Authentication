/* eslint-disable no-unused-vars */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse, faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
const AdminDashbord = ()=>{

    const [product, setProduct] = useState([])

    useEffect(()=>{
        getProduct()
    },[])

    const getProduct = async()=>{
        let data = await fetch("/api/v1/product/allproducts")
        data = await data.json()
        console.log(data);
        setProduct(data.data)
        
    }

    const deleteProduct = async (id)=>{
        let result = await fetch(`/api/v1/product/${id}`,{
            method:"delete",
        })
        result = await result.json()
        console.log(result);
        if(result){
            getProduct()
            alert("your product deleted")
        }
    }

    return(
        <>
        <div className='flex h-[100vh]'>

        {/* Left side of dashboard  */}
        <div className='w-[20%] h-[100%] bg-black'>
            <div className='text-white p-4 flex items-center justify-between font-semibold bg-black '>
            <h1 className='text-3xl cursor-pointer'>Logo</h1>
            <button className='text-2xl '><FontAwesomeIcon icon={faBars} /></button>
            </div>
            <div className='flex-col'>
                <div className='text-white px-4 mb-3 flex items-center font-semibold bg-black '>
                    <h1 className='cursor-pointer'><FontAwesomeIcon icon={faHouse} /></h1>
                    <h3 className='ml-3 cursor-pointer'>Dashboard</h3>
                </div>
            </div>
        </div>

        {/* Right side of dashboard  */}
        <div className='w-[80%] h-[100%] bg-slate-200 p-6'>
            <div className='flex items-center'>
            <h1 className='font-semibold text-2xl'>Dashboard</h1>
            <h2 className='ml-4'>Home {">"} Product list</h2>  
            </div>



            {/* All the movies list */}
            <div className='bg-white p-2 mt-4 h-[83%] rounded-md'>
                <div className='bg-gray-600 text-white mt-2 rounded-md flex justify-between p-2'>
                <div className='w-[20%]'>
                <p className='ml-4 text-[15px] font-semibold'>Product Image</p>
                </div>
                <div className='w-[20%]'>
                <p className='ml-4 text-[15px] font-semibold'>Product Name</p>
                </div>
                <div className='w-[20%]'>
                <p className='ml-4 text-[15px] font-semibold'>Product Description</p>
                </div>
                <div className='w-[20%]'>
                <p className='ml-4 text-[15px] font-semibold'>Product Price</p>
                </div>
                </div>
            
            <div  className=' h-[105%] mt-2 rounded-md overflow-scroll no-scrollbar'>
            {

                product.map((product)=>{
                    return(
                        <div key={product._id} className='bg-gray-400 mt-2 rounded-md flex justify-between p-2'>
                            <div className='w-[20%]'>
                            <p className='ml-4 text-[15px] font-semibold'>{product.name}</p>
                            <img className='w-[150px]' src={product.image} alt="" />
                            </div>
                            <div className='w-[20%]'>
                            <p className='ml-4 text-[15px] font-semibold'>{product.productName}</p>
                            </div>
                            <div className='w-[20%]'>
                            <p className='ml-4 text-[15px] font-semibold'>{product.productDescription}</p>
                            </div>
                            <div className='w-[20%] flex'>
                            <p className='ml-10 text-[15px] font-semibold'>{`$${product.price}`}</p>
                            <button onClick={()=>deleteProduct(product._id)} className="text-red-600 ml-12"><FontAwesomeIcon icon={faTrash} /></button>
                            <button className="text-blue-600 ml-5"><Link to={`/admin/${product._id}`}><FontAwesomeIcon icon={faPen} /></Link></button>
                            </div>
                        </div>
                        
                )
            })
        }
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default AdminDashbord;