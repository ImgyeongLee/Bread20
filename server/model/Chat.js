import mongoose from "mongoose";

const chatSchema = mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    createdAt: "created_at",
  },
  messageType: {
    type: String,
  },
});

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;
