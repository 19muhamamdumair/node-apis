import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Header/Navbar'

const Home = () => {
    const navigate=useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem("user"))
        {
            alert("Login First")
            navigate('/login')
        }
    },[])
  return (
    <>
        <Navbar/>
    </>
  )
}

export default Home