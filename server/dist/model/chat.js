import mongoose from "mongoose";
var Schema = mongoose.Schema;
var chatSchema = new Schema({
  chatHistory: {
    type: Schema.Types.ObjectId,
    ref: "ChatHistory"
  },
  messages: [{
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    message: {
      type: Object,
      required: true
    },
    timestamp: {
      type: Date,
      "default": Date.now
    }
  }]
});
export var chat = mongoose.model("Chat", chatSchema);