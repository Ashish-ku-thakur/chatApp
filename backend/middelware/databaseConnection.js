import mongoose from "mongoose";

export let databaseConnection = async (req, res) => {
  try {
    let connection = await mongoose.connect(process.env.MONGO_URI);

    if (connection) {
      console.log("db connected");
    } else {
      console.log("db connection failed");
    }
  } catch (error) {
    console.log(error);
  }
};
