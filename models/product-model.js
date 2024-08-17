import mongoose from "mongoose";

const prodctSchema= mongoose.Schema({

name:{
    typeof:String,
    required:true,
    
},
image:String,
price:{
    typeof:Number,
    required:true,
    },
 discount:{ 
    typeof:Number,
    default:0,
    },
bgcolor:String,
panelcolor:String,
textcolor:String,
}
,
     { timestamps: true})
module.exports= mongoose.model("product",prodctSchema)
     