import express from "express"
const app = express()

const asyncHandler = (requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((error)=>console.log(error))
    }
}

export {asyncHandler}