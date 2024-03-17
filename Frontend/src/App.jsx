/* eslint-disable no-unused-vars */
import './App.css'
import Login from './components/Login'
import Nav from './components/Nav'
import Register from './components/Register'
import User from './components/User'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      {/* <h1 className='p-2 bg-green-500'>hi kalpesh </h1> */}
      {/* <Login/> */}
      {/* <Register/> */}
      <Nav/>
      <Outlet/>
    </>
  )
}

export default App
