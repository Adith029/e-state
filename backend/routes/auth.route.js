const {Router} = require ('express')
const authController = require('../controller/authcontroller')
const route = Router()

route.post('/add',authController.addUsers)
route.get('/login',authController.loginUser)
route.post('/logout',authController.logout)

module.exports = route