import mongoose from "mongoose";

let userSchema = new mongoose.Schema(
  {
    fullname: { require: true, type: String },
    email: { require: true, type: String },
    password: { require: true, type: String },
    gender: { require: true, type: String, enum: ["mail", "femail"] },
    profilePhoto: {
      type: String,
      default:""
    },
  },
  { timestamps: true }
);

let User = mongoose.model("User", userSchema);

export default User;
