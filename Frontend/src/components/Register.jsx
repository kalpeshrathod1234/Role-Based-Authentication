/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
const Register = ()=>{
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [role, setRole] = useState()
    const navigate = useNavigate()

    const collectData = async(e)=>{
        e.preventDefault()
        let result = await fetch("/api/v1//users/register",{
            method:"post",
            body: JSON.stringify({username, email, password, role}),
            headers:{
                "content-Type":"application/json"
            },
        })
        result = await result.json()
        console.log("result =", result.Data);
        if(result.data.role == "admin"){
            navigate("/admin")
        }else{
            navigate("/user")
        }
    

        console.log(username);
        console.log(email);
        console.log(password);
        console.log(role);

        setUsername("")
        setEmail("")
        setPassword("")
        setRole("")
    }
    return(
        <>
            <div className="flex justify-center items-center bg-blue-500 w-[100%] h-[100vh]">
                <div className="bg-white p-3 rounded-md w-[400px]">
                    <h2 className="text-[50px] mb-3">Sign-Up</h2>
                    <form action="">
                        <div className="mb-4">
                            <label htmlFor="username" className="mb-2"><strong>Username</strong></label>
                            <input onChange={(e)=> setUsername(e.target.value)} value={username} type="name" placeholder="Enter Username" name="username" id="name" className="w-[95%] h-[40px] p-2 border-2 border-gray-300"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="mb-2"><strong>Email</strong></label>
                            <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeholder="Enter Email" name="email" id="email" className="w-[95%] h-[40px] p-2 border-2 border-gray-300"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password"><strong>Password</strong></label>
                            <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" placeholder="Enter Password" name="password" id="password" className="w-[95%] h-[40px] p-2 border-2 border-gray-300" />
                        </div>
                        <div className="flex gap-5 mb-4">
                            <fieldset className="border-[1px] border-black w-[95%] flex items-center gap-10 p-4">
                                <legend>Select Role:</legend>
                                <div className="flex gap-2">
                                    <input onChange={(e)=> setRole(e.target.value)} value={role} type="radio" name="role" id="admin" value="admin" />
                                    <label htmlFor="admin"><strong>Admin</strong></label>
                                </div>
                                <div className="flex gap-2">
                                    <input onChange={(e)=> setRole(e.target.value)} value={role} type="radio" name="role" id="team-member" value="team member" />
                                    <label htmlFor="team-member"><strong>Team Member</strong></label>
                                </div>
                            </fieldset>
                        </div>
                        <button onClick={(e) =>collectData(e)} className="bg-green-700 w-[95%] p-2 text-white font-medium">Sign up</button>
                        <p>You are agree to our terms and policies</p>
                        {/* <button className=" w-[95%] p-2 text-black font-medium border-2 border-gray-300 mt-4"></button> */}
                        {/* <Link className=" w-[95%] p-2 text-black font-medium border-2 border-gray-300 mt-4" to="/login">Login</Link> */}
                        <Link to="/login"><button className=" w-[95%] p-2 text-black font-medium border-2 border-gray-300 mt-4">Login</button></Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;