const  express = require("express");
const router = express.Router(); 
const userModel = require("../models/user-model")
router.get("/",(req,res)=>{
    res.send("Ueser Router")
})

router.post("/register",  async (req,res)=>{
    // res.send("Uers Router")
    let {username, emmail, password }=req.body;
    let newUser= await userModel.create({
        username,
        email,
        password,
    })
});

module.exports= router;
