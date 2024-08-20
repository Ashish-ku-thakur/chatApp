import mongoose from "mongoose";

let massageSchema = new mongoose.Schema(
  {
    senderId:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    receiverId:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    massage:{require:true, type:String},
  },
  {timestamps:true},
);

let Massage = mongoose.model("Massage", massageSchema);

export default Massage
