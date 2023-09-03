const express = require("express");
const router = express();
const {registerUser, loginuser, logoutUser} = require("../controllers/user.controllers");
const { isAuth } = require("../middlewares/AuthMiddleware");
 
router.post("/registration",registerUser)
router.post("/login",loginuser)
router.post("/logout",isAuth ,logoutUser)
module.exports=router;