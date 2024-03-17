/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

const ProductDetails = ()=>{

    const [productName, setProductName] = useState("")
    const [department, setDepartment] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const params = useParams()

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

    return(
        <>
            <div className=" h-[91.7vh] flex justify-center items-center">
                <div className="bg-gray-200 w-[80%] flex p-4 gap-10 rounded-md border-black border-[1px]">
                    <div className="w-[900px]">
                        <img className="rounded-md"  src={image} alt="" />
                    </div>
                    <div className="flex-col">
                        <h1 className="text-[30px] font-extrabold">{productName}</h1>
                        <h1 className="text-[20px] font-semibold mb-8">{`department: ${department}`}</h1>
                        <p className="text-[20px] mb-5">{productDescription}</p>
                        <div className="bg-yellow-500 w-[15%] text-center py-2 px-4 font-semibold text-[20px]">
                            <h1>{`$${price}`}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;