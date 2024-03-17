/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {useParams, useNavigate} from "react-router-dom"

const UpdateProduct = ()=>{

    const [productName, setProductName] = useState("")
    const [department, setDepartment] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const params = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        getProductDetails()
    },[])


    const getProductDetails = async()=>{
        console.log(params.product);
        let data = await fetch(`/api/v1/product/${params.product}`)
        data = await data.json()
        let result = data.data;
        console.log(result);

        setProductName(result.productName)
        setProductDescription(result.productDescription)
        setDepartment(result.department)
        setImage(result.image)
        setPrice(result.price)
    }  
    
    const updateProduct = async()=>{
        let data = await fetch(`/api/v1/product/${params.product}`,{
            method:"post",
            body:JSON.stringify({productName,productDescription,department,price}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        data = await data.json()
        console.log(data);
        if(data){
            alert("data updated successfully")
            navigate("/admin")
        }
    }

    return(
        <>
            <div className=" h-[91.7vh] flex justify-center items-center">
                <div className="bg-gray-200 w-[80%] flex p-4 gap-10 rounded-md border-black border-[1px]">
                    <div className="w-[900px]">
                        <img className="rounded-md"  src={image} alt="" />
                    </div>
                    <div className="flex-col">
                        {/* <h1 className="text-[30px] font-extrabold">{productName}</h1> */}
                        <input className="text-[30px] font-extrabold" type="text" value={productName} onChange={(e)=> setProductName(e.target.value)} />
                            {/* <h1 className="text-[20px] font-semibold mb-8">{`department: ${department}`}</h1> */}
                        <div className="flex mt-1">
                            <h1 className="text-[20px] font-semibold">department:</h1>
                            <input className="text-[20px] font-semibold mb-8 w-[100px]" type="text" value={`${department}`} onChange={(e)=> setDepartment(e.target.value)} />
                        </div>
                        {/* <p className="text-[20px] mb-5">{productDescription}</p> */}
                        <textarea className="text-[20px] mb-5 text-black" value={productDescription} onChange={(e)=> setProductDescription(e.target.value)} name="" id="" cols="85" rows="2"></textarea>
                        <div className="bg-yellow-500 w-[15%] text-center py-2 px-4 font-semibold text-[20px] rounded-md flex">
                            {/* <h1>{`$${price}`}</h1> */}
                            <h1>$</h1>
                            <input className="w-[60px] bg-yellow-500" type="text" value={`${price}`} onChange={(e)=> setPrice(e.target.value)} />
                        </div>
                        <div className="mt-4 bg-blue-500 text-[20px] p-2 w-[25%] text-center ml-[75%] rounded-md">
                            <button onClick={updateProduct}>Update Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateProduct;