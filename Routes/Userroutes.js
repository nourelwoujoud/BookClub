const express = require('express')

const users =require('../models/UserModel')

const router = express.Router()


const {
    registerUser,
    loginUser
}=require("../controllers/Users")


router.get('/',loginUser)


router.post('/',registerUser)


module.exports = router