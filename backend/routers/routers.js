const express=require("express");
const router=express.Router()
const controller=require("../controllers/controlles");
router.get("/",controller.home);
router.post("/create-checkout-session",controller.createSession)


module.exports=router;