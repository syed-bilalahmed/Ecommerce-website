const express = require("express");
const router = express.Router();
const isloggedIn=  require("../middlewares/isloggedIn")


router.get("/", (req, res) => {
    console.log("Index route accessed");
    res.render("./index.ejs")
});

router.get("/shop", isloggedIn,(req,res)=>{
    console.log("Shop route accesed");
    res.render("./shop.ejs")
    

})

module.exports = router;