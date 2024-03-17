/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"


const User = ()=>{

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
    
    return(
        <>
            <div className="bg-white w-[100%] h-[100vh] py-3 px-20">
                <h2 className="text-center text-[50px] mb-1">All Products</h2>
                <div className=" w-[100%] h-[100vh] py-3 px-20 flex flex-wrap gap-10 justify-center">
                {
                    product.map((product)=>{
                        return(
                            <div key={product.id} className="bg-blue-500 w-[300px] flex flex-col justify-center items-center p-2 rounded-lg gap-4">
                                <img className="rounded-lg" src={product.image} alt="" />
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <h1 className="font-extrabold text-xl">{product.productName}</h1>
                                    <p className="text-center font-semibold">{product.productDescription}</p>
                                </div>
                                <div className="flex gap-10">
                                    <div className="bg-yellow-500 py-2 px-4 rounded-md">
                                        <h1>{`$${product.price}`}</h1>
                                    </div>
                                    <div className="bg-black text-white py-2 px-4 rounded-md">
                                        <Link to={`/user/${product._id}`}><button>View More</button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                    {/* <div className="bg-blue-500 w-[300px] flex flex-col justify-center items-center p-2 rounded-lg gap-4">
                        <img className="rounded-lg" src="src/assets/product.jpg" alt="" />
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className="font-extrabold text-xl">Small Frozen Tuna</h1>
                            <p className="text-center font-semibold">The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients</p>
                        </div>
                        <div className="flex gap-10">
                            <div className="bg-yellow-500 py-2 px-4 rounded-md">
                                <h1>$71.00</h1>
                            </div>
                            <div className="bg-black text-white py-2 px-4 rounded-md">
                                <Link><button>View More</button></Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-blue-500 w-[300px] flex flex-col justify-center items-center p-2 rounded-lg gap-4">
                        <img className="rounded-lg" src="src/assets/product.jpg" alt="" />
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className="font-extrabold text-xl">Small Frozen Tuna</h1>
                            <p className="text-center font-semibold">The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients</p>
                        </div>
                        <div className="flex gap-10">
                            <div className="bg-yellow-500 py-2 px-4 rounded-md">
                                <h1>$71.00</h1>
                            </div>
                            <div className="bg-black text-white py-2 px-4 rounded-md">
                                <Link><button>View More</button></Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-blue-500 w-[300px] flex flex-col justify-center items-center p-2 rounded-lg gap-4">
                        <img className="rounded-lg" src="src/assets/product.jpg" alt="" />
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className="font-extrabold text-xl">Small Frozen Tuna</h1>
                            <p className="text-center font-semibold">The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients</p>
                        </div>
                        <div className="flex gap-10">
                            <div className="bg-yellow-500 py-2 px-4 rounded-md">
                                <h1>$71.00</h1>
                            </div>
                            <div className="bg-black text-white py-2 px-4 rounded-md">
                                <Link><button>View More</button></Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-blue-500 w-[300px] flex flex-col justify-center items-center p-2 rounded-lg gap-4">
                        <img className="rounded-lg" src="src/assets/product.jpg" alt="" />
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className="font-extrabold text-xl">Small Frozen Tuna</h1>
                            <p className="text-center font-semibold">The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients</p>
                        </div>
                        <div className="flex gap-10">
                            <div className="bg-yellow-500 py-2 px-4 rounded-md">
                                <h1>$71.00</h1>
                            </div>
                            <div className="bg-black text-white py-2 px-4 rounded-md">
                                <Link><button>View More</button></Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-blue-500 w-[300px] flex flex-col justify-center items-center p-2 rounded-lg gap-4">
                        <img className="rounded-lg" src="src/assets/product.jpg" alt="" />
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className="font-extrabold text-xl">Small Frozen Tuna</h1>
                            <p className="text-center font-semibold">The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients</p>
                        </div>
                        <div className="flex gap-10">
                            <div className="bg-yellow-500 py-2 px-4 rounded-md">
                                <h1>$71.00</h1>
                            </div>
                            <div className="bg-black text-white py-2 px-4 rounded-md">
                                <Link><button>View More</button></Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-blue-500 w-[300px] flex flex-col justify-center items-center p-2 rounded-lg gap-4">
                        <img className="rounded-lg" src="src/assets/product.jpg" alt="" />
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className="font-extrabold text-xl">Small Frozen Tuna</h1>
                            <p className="text-center font-semibold">The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients</p>
                        </div>
                        <div className="flex gap-10">
                            <div className="bg-yellow-500 py-2 px-4 rounded-md">
                                <h1>$71.00</h1>
                            </div>
                            <div className="bg-black text-white py-2 px-4 rounded-md">
                                <Link><button>View More</button></Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-blue-500 w-[300px] flex flex-col justify-center items-center p-2 rounded-lg gap-4">
                        <img className="rounded-lg" src="src/assets/product.jpg" alt="" />
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className="font-extrabold text-xl">Small Frozen Tuna</h1>
                            <p className="text-center font-semibold">The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients</p>
                        </div>
                        <div className="flex gap-10">
                            <div className="bg-yellow-500 py-2 px-4 rounded-md">
                                <h1>$71.00</h1>
                            </div>
                            <div className="bg-black text-white py-2 px-4 rounded-md">
                                <Link><button>View More</button></Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-blue-500 w-[300px] flex flex-col justify-center items-center p-2 rounded-lg gap-4">
                        <img className="rounded-lg" src="src/assets/product.jpg" alt="" />
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className="font-extrabold text-xl">Small Frozen Tuna</h1>
                            <p className="text-center font-semibold">The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients</p>
                        </div>
                        <div className="flex gap-10">
                            <div className="bg-yellow-500 py-2 px-4 rounded-md">
                                <h1>$71.00</h1>
                            </div>
                            <div className="bg-black text-white py-2 px-4 rounded-md">
                                <Link><button>View More</button></Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-blue-500 w-[300px] flex flex-col justify-center items-center p-2 rounded-lg gap-4">
                        <img className="rounded-lg" src="src/assets/product.jpg" alt="" />
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className="font-extrabold text-xl">Small Frozen Tuna</h1>
                            <p className="text-center font-semibold">The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients</p>
                        </div>
                        <div className="flex gap-10">
                            <div className="bg-yellow-500 py-2 px-4 rounded-md">
                                <h1>$71.00</h1>
                            </div>
                            <div className="bg-black text-white py-2 px-4 rounded-md">
                                <Link><button>View More</button></Link>
                            </div>
                        </div>
                    </div>
                     */}

                </div>
                
            </div>
        </>
    )
}

export default User;