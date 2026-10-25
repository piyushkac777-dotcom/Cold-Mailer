import mongoose from "mongoose";

const fileSchema = mongoose.Schema({
  fileName:{
    type:String,
    required:true
  },
   fileURL:{
    type:String,
    required:true
  },
   createdBy:{
    ref : "User",
    type:mongoose.Schema.Types.ObjectId,
    required:true
  }
},
)
const File=mongoose.model("File",fileSchema)
export default File
