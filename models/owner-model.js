const mongoose =require("mongoose");

const ownerSchema= mongoose.Schema({
username:{
    typeof:String,
    required:true,
    trim:true,
},
email:{
    typeof:String,
    required:true,
    },
 password:{
    typeof:String,
    required:true,
    },
    products:{
        typeof:String
    },
     
}
,
     { timestamps: true})
module.exports= mongoose.model("Owner",ownerSchema)
     