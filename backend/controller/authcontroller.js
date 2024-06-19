const userDB = require('../models/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cookie = require ('cookie-parser')
require('dotenv').config()

const addUsers =async (req,res)=>{
    try {
     const {confirmPassword,...data} = req.body
     const plainPassword = data.password
    const saltRounds = 10
     const hashedPassword = await bcrypt.hash(plainPassword,saltRounds)
     data.password = hashedPassword
     const user = await userDB.create(data)
     return res.status(200).send("user created")
    } catch (error) { 
     return res.status(500).send(error)
    }
 }

 const loginUser = async (req,res)=>{
    try {
     const {email,password} = req.query
     const findUser = await userDB.findOne({email:email})
 
     if(findUser!=null){
         const hashedPassword = findUser.password
         const passwordCheck = await bcrypt.compare(password,hashedPassword)
         if(!passwordCheck){
         return res.status(500).send("invalid Credentials")
         }else{
            const age = 1000 * 60 * 60 * 24 * 7;
         const token = await jwt.sign({sub:findUser},process.env.JWT_TOKEN,{expiresIn:age})
         return res.cookie("token",token,{
            httpOnly:true,
            maxAge:age
         }).status(200).send("Login Successful")
         }
     }
     else{
         return res.status(401).send("User Not Found")
     }
    } catch (error) {
     return res.status(500).send(error)
    }
 }

 const logout = async(req,res)=>{
   res.clearCookie('token').status(200).json({message:"Logout Successfull"})
 }

 module.exports = {addUsers,loginUser,logout}