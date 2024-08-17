import mongoose from "mongoose";

const userSchema= mongoose.Schema({
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
cart:{
    typeof:Array,
    default:[],
    },
isAdmin:{
    typeof:Boolean,
    
    },
orders:{
    typeof:Array,
    default:[],
    },
contact:{
    typeof:Number,
    
    },
image:{
    typeof:String,
    
    },



},{ timestamps: true})
module.exports= mongoose.model("User",userSchema)
     