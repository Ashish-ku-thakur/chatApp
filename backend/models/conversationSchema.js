import mongoose from "mongoose";

let conversationSchema = new mongoose.Schema(
  {
    group: [
      {
        require: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    chates: [
      {
        require: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "Massage",
      },
    ],
  },
  { timestamps: true }
);

let Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
