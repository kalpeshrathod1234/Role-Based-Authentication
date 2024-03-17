/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import {Link,NavLink, useNavigate} from "react-router-dom"

function Nav(){

    const logout = ()=>{

    }
    return (
        <>
            <ul className="flex flex-row justify-around bg-gray-600 p-4 font-semibold text-[17px]">
                <li>
                    <NavLink 
                        to="/user"
                        className={({isActive})=>`${isActive ? "text-orange-500 underline":"text-white"}`}    
                    >
                        Products
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink 
                        to="/add"
                        className={({isActive})=>`${isActive ? "text-orange-500 underline":"text-white"}`}    
                    >
                        Add Products
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/update"
                        className={({isActive})=>`${isActive ? "text-orange-500 underline":"text-white"}`}    
                    >
                        Update Products
                    </NavLink>
                </li> */}
                <li>
                    <NavLink 
                        to="/login"
                        className={({isActive})=>`${isActive ? "text-orange-500 underline":"text-white"}`}    
                        onClick={logout}
                    >
                        Logout
                    </NavLink>
                </li>
            </ul>
        </>
    )
}

export default Nav;
