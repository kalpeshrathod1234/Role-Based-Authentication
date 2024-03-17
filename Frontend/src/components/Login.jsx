/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const Login = ()=>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    async function collectData(e){
        e.preventDefault()
        try {
            console.log(email);
            console.log(password);
            let result = await fetch("/api/v1//users/login",{
                method:"post",
                body:JSON.stringify({email,password}),
                headers:{
                    "Content-Type":"application/json"
                },
            })
            result = await result.json()
            console.log("result = ", result.data.user.role);
            if(result.data.user.role == "team member"){
                navigate("/user")
            }else{
                navigate("/admin")
            }
        } catch (error) {
            console.log("ERROR :: ",error);
        }
    }

    return(
        <>
            <div className="flex justify-center items-center bg-blue-500 w-[100%] h-[100vh]">
                <div className="bg-white p-3 rounded-md w-[400px]">
                    <h2 className="text-[50px] mb-3">Sign-In</h2>
                    <form action="">
                        <div className="mb-4">
                            <label htmlFor="email" className="mb-2"><strong>Email</strong></label>
                            <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeholder="Enter Email" name="email" id="email" className="w-[95%] h-[40px] p-2 border-2 border-gray-300"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password"><strong>Password</strong></label>
                            <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" placeholder="Enter Password" name="password" id="password" className="w-[95%] h-[40px] p-2 border-2 border-gray-300" />
                        </div>
                        <button onClick={collectData} className="bg-green-700 w-[95%] p-2 text-white font-medium">Log in</button>
                        <p>You are agree to our terms and policies</p>
                        {/* <button className=" w-[95%] p-2 text-black font-medium border-2 border-gray-300 mt-4">Create Account</button> */}
                        <Link to="/signup"><button className=" w-[95%] p-2 text-black font-medium border-2 border-gray-300 mt-4">Create Account</button></Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;