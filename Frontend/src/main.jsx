/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import User from './components/User.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import AdminDashbord from './components/AdminDashbord.jsx'
import UpdateProduct from './components/UpdateProduct.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/user' element={<App/>}>
      <Route path="/user" element={<User/>}/>
      <Route path="/user/:product" element={<ProductDetails/>}/>
    </Route>
    <Route path='/admin' element={<AdminDashbord/>}/>
    <Route path='/admin/:product' element={<UpdateProduct/>}/>  
    <Route path="/" element={<Register/>}/>
    <Route path="/signup" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    {/* <Route path="/user" element={<User/>}/> */}
    </>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
