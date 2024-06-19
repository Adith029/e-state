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
import SellerDashboard from '../components/SellerDashboard'
import AdminDashboard from '../components/AdminDashboard'
import AboutUs from '../components/AboutUs'
import Contact from '../components/Contact'
import ScrollTop from '../components/ScrollTop'
import SetUpUserProfile from '../components/SetUpUserProfile'
import SetUpSellerProfile from '../components/SetUpSellerProfile'
import AddProperties from '../components/AddProperties'
import RegisterAsUser from '../components/RegisterAsUser'





function Routess () {
  return (
    <BrowserRouter>
    <ScrollTop/>
    <NavHeader/>
    <Routes>
    <Route path='/' element={<><BodyPart/><BodyPart2/><BodyPart3/><BodyPart4/></>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/user' element={<UserDashboard/>}/>
    <Route path='/properties' element={<Properties/>}/>
    <Route path='/properties/details' element={<PropertyDetails/>}/>
    <Route path='/seller' element={<SellerDashboard/>}/>
    <Route path='/admin' element={<AdminDashboard/>}/>
    <Route path='/about' element={<AboutUs/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/usersettings' element={<SetUpUserProfile/>}/>
    <Route path='/sellersettings' element={<SetUpSellerProfile/>}/>
    <Route path='/addproperties' element={<AddProperties/>}/>
    <Route path ='/registerasseller' element={<RegisterAsUser/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Routess