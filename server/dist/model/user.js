import mongoose from "mongoose";
var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  profileImg: {
    type: String
  },
  timestamp: {
    type: Date,
    "default": Date.now
  },
  resetToken: {
    type: String
  },
  expireAccessToken: [{
    type: Object
  }],
  expireRefreshToken: [{
    type: Object
  }],
  ip: {
    type: String
  },
  location: {
    type: String
  },
  chatHistory: [{
    type: Schema.Types.ObjectId,
    ref: "ChatHistory"
  }],
  maxRateLimit: {
    type: Number,
    "default": 10
  },
  currentLimit: {
    type: Number,
    "default": 0
  },
  recentRateLimitTime: {
    type: Number,
    "default": 0
  }
});
export var user = mongoose.model("User", userSchema);