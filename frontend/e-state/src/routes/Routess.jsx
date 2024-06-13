import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavHeader from '../components/NavHeader'
import BodyPart from '../components/BodyPart'
import BodyPart2 from '../components/BodyPart2'
import BodyPart3 from '../components/BodyPart3'
import Footer from '../components/Footer'
import BodyPart4 from '../components/BodyPart4'
import Login from '../components/Login'
import Register from '../components/Register'
import UserDashboard from '../components/UserDashboard'
import Properties from '../components/Properties'
import PropertyDetails from '../components/PropertyDetails'





function Routess () {
  return (
    <BrowserRouter>
    <NavHeader/>
    <Routes>
    <Route path='/' element={<><BodyPart/><BodyPart2/><BodyPart3/><BodyPart4/></>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/user' element={<UserDashboard/>}/>
    <Route path='/properties' element={<Properties/>}/>
    <Route path='/properties/details' element={<PropertyDetails/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Routess