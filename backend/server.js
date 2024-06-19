const express = require ('express')
const app = express()
require ('./config/dataBaseConfig.js')
const userRoutes = require ('./routes/userRoutes.js')
const authRoutes = require ('./routes/auth.route.js')
const adminRoutes = require ('./routes/adminRoutes.js')

app.use(express.json())

app.use('/user',userRoutes)
app.use('/admin',adminRoutes)
app.use('/auth',authRoutes)

app.listen(8080,()=>{
    console.log("Server is running.....");
})