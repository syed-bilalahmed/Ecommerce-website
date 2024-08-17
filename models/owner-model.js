import mongoose from "mongoose";

const ownerSchema= mongoose.Schema({


}
,
     { timestamps: true})
module.exports= mongoose.model("Owner",ownerSchema)
     