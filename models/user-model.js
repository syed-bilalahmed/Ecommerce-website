import mongoose from "mongoose";

const userSchema= mongoose.Schema({


}
,
     { timestamps: true})
module.exports= mongoose.model("User",userSchema)
     