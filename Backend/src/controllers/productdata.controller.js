import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {ApiError} from "../utils/ApiError.js"
import mongoose from "mongoose";
import { User } from "../models/user.model.js";
import { Product } from "../models/product.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import  jwt from "jsonwebtoken"

const url = "https://64e0caef50713530432cafa1.mockapi.io/api/products"

// import fetch from "node-fetch"

// async function getAllProducts(){
//     const data = await fetch("https://64e0caef50713530432cafa1.mockapi.io/api/products")
//     const result = await data.json()
//     for(let i=0; i< result.length; i++){

//         const product = new Product({
//             productName: result[i]["productName"],
//             price: result[i]["price"],
//             image: result[i]["image"],
//             productDescription: result[i]["productDescription"],
//             department: result[i]["department"],
//             id: result[i]["id"],
//         }) 
//         product.save();
//         console.log(result[i]["id"]);
//     }
// }

const getAllProducts = asyncHandler(async(req,res)=>{
    const data = await Product.find()

    return res.status(201).json(
        new ApiResponse(200,data,"get all product data successfully")
    )
}) 

const fetchProductData = asyncHandler(async(req,res)=>{
    
    const data = await fetch(url)
    const result = await data.json()
    // console.log(result);

    const {productName, price, image, productDescription, department, id} = req.body

    console.log(productName);
    console.log(price);
    console.log(image);
    console.log(productDescription);
    console.log(department);
    console.log(id);

    if(
        [productName, price, image, productDescription, department,].some((field)=>
        field?.trim() === "")
    ){
        throw new ApiError(400, "All field are require")
    }

    const existProduct = await Product.findOne({
        $or:[
            { productName }
        ]
    })

    if(existProduct){
        throw new ApiError(404,"Product already exists")
    }

    const product = await Product.create({
        productName, 
        price, 
        image, 
        productDescription, 
        department, 
        id
    })

    const createdProduct = await Product.find(Product.productName)

    if(!createdProduct){
        throw new ApiError(500,"server side error please try again")
    }

    return res.status(201).json(
        new ApiResponse(200,createdProduct,"user register successfully")
    )

})

const getOneProduct = asyncHandler(async(req,res)=>{
    const {id} = req.params

    console.log(id);

    if(!id){
        throw new ApiError(400,"ID is require")
    }

    let data = await Product.findOne({_id:id})

    if(!data){
        throw new ApiError(500,"data is not present")
    }

    return res.status(200).json(
        new ApiResponse(200,data,"product get successfully")
    )
})

const deleteProduct = asyncHandler(async(req,res)=>{
    const {id} = req.params

    if(!id){
        throw new ApiError(400,"ID is require for delete product")
    }

    const product = await Product.findById({_id:id})

    if(!product){
        throw new ApiError(500,"Product is not present in database")
    }

    const data = await Product.findByIdAndDelete({_id:id})

    if(!data){
        throw new ApiError(500, "Product not delete because server issue")
    }

    return res.status(200).json(
        new ApiResponse(200, data, "product delete successfully")
    )
})

const updateProduct = asyncHandler(async(req,res)=>{
    const {productName, price, productDescription, department} = req.body
    const {id} = req.params

    if(
        [productName, price, productDescription, department].some((fields)=> fields?.trim === "")
    ){
        throw new ApiError(400,"all fields are require")
    }

    const data = await Product.findByIdAndUpdate(
        id,
        {
            $set:{
                productName,
                price,
                productDescription,
                department
            }
        },
        {new: true}
    ).select("-password")

    return res.status(200).json(
        new ApiResponse(200,data,"your data update successfully")
    )
})

export{
    fetchProductData,
    getAllProducts,
    getOneProduct,
    deleteProduct,
    updateProduct,
}