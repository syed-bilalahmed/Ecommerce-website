const mongoose =require("mongoose");

const prodctSchema= mongoose.Schema({

name:{
    type:String,
    required:true,
    
},
image:String,
price:{
    type:Number,
    required:true,
    },
 discount:{ 
    type:Number,
    default:0,
    },
bgcolor:String,
panelcolor:String,
textcolor:String,
}
,
     { timestamps: true})
module.exports= mongoose.model("product",prodctSchema)
     