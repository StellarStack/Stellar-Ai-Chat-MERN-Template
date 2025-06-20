import mongoose from "mongoose";
var Schema = mongoose.Schema;
var chatHistorySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  chat: {
    type: Schema.Types.ObjectId,
    ref: "Chat"
  },
  timestamp: {
    type: Date,
    "default": Date.now
  }
});
export var chatHistory = mongoose.model("ChatHistory", chatHistorySchema);