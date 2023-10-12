import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
});

const Room = mongoose.model("Room", roomSchema);

export default Room;
