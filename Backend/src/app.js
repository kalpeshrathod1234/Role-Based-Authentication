import express  from "express";
import cors from "cors"
import cookieparser from "cookie-parser"
const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGEN,
    credentials: true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieparser())

//import routes
import userRouter from "./routes/user.routes.js"
import productRouter from "./routes/product.routes.js";

//use router

app.use("/api/v1/users",userRouter)
app.use("/api/v1/product",productRouter)

export {app}