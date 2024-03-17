import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {ApiError} from "../utils/ApiError.js"
import mongoose from "mongoose";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import  jwt from "jsonwebtoken";

const generateAccessAndRefreshToken = async(userId)=>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        
        user.refreshToken = refreshToken
        
        await user.save({ ValidateBeforeSave: true })
        
        console.log(accessToken);
        console.log(refreshToken);
        return {accessToken, refreshToken}
    } catch (error) {
        throw new ApiError(500,"something went wrong while generate refresh and access token ")
    }
}

const registerUser = asyncHandler(async(req,res)=>{

    const {username, role, email, password, } = req.body
    console.log("role = ",role);

    if(
        [username, role, email, password].some((field)=>
        field?.trim() === "")
    ){
        throw new ApiError(400, "All field are require")
    }

    const existUser = await User.findOne({
        $or:[
            { username },{ email }
        ]
    })

    if(existUser){
        throw new ApiError(404,"email and username already exists")
    }

    const user = await User.create({
        role,
        email,
        password,
        username: username.toLowerCase(),
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500,"server side error please try again")
    }

    return res.status(201).json(
        new ApiResponse(200,createdUser,"user register successfully")
    )


})

const loginUser = asyncHandler(async(req,res)=>{

    const {username, password, email} = req.body

    if(
        [(username || email), password,].some((field)=> field?.trim() === "")
    ){
        throw new ApiError(400, "all field are required")
    }

    const user = await User.findOne({
        $or:[{ username },{ email }]
    })

    if(!user){
        throw new ApiError(401,"user does not exist")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(400,"password is incorrect")
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true,
    }

    console.log(accessToken);
    console.log(refreshToken);

    return res
    .status(200)
    .cookie("refreshToken",refreshToken,options)
    .cookie("accessToken",accessToken,options)
    .json(
        new ApiResponse(
            200,
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User Logged In Successfully"
        ) 
    )
    
})

const logOutUser = asyncHandler(async(req,res)=>{
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset:{
                refreshToken: 1 
            }
        },
        {
            new:true
        },
    )

    const options = {
        httpOnly:true,
        secure:true
    }

    return res
    .status(200)
    .clearCookie("refreshToken",options)
    .clearCookie("accessToken",options)
    .json(
        new ApiResponse(200,{},"User Logout")
    )
})

export{
    registerUser,
    loginUser,
    logOutUser,
}