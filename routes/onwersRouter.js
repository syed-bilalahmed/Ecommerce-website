const  express = require("express");
const  router = express.Router;

router.get("/",(req,res)=>{
    res.send("owners Router")
})

module.exports= router;
