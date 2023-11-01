const express = require("express")
const routes=express.Router()
const userController = require("../controllers/userControllers")
routes.post("/register",userController.register)
module.exports=routes