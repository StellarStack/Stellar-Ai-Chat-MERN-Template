import express from "express";
import mongoose from "mongoose";
import requestIp from "request-ip";
import "dotenv/config";
import cros from "cors";

// const MONGODB_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}mymongoinit.6md0cxy.mongodb.net/gemini?retryWrites=true&w=majority`;
var MONGODB_URL = process.env.MONGO_URL; //"mongodb://localhost:27017/"
var PORT_NO = 3030;
var app = express();
app.use(express.json());
app.use(requestIp.mw());
var originUrl = process.env.CLIENT_REDIRECT_URL;
var crosOption = {
  origin: originUrl,
  optionsSuccessStatus: 200,
  credentials: true
};
app.use(cros(crosOption));
import publicRoutes from "./router/public.js";
import authRoutes from "./router/auth.js";
app.use("/gemini", publicRoutes);
app.use(authRoutes);
app.use(function (error, req, res, next) {
  console.log(error);
  var status = error.statusCode || 500;
  var message = error.message;
  var data = error.data;
  res.status(status).json({
    message: message,
    data: data,
    error: error
  });
});
mongoose.connect(MONGODB_URL).then(function (result) {
  app.listen(process.env.PORT || PORT_NO, function () {
    console.log("Gemini server is running on port ".concat(PORT_NO));
  });
})["catch"](function (err) {
  console.log(err);
});