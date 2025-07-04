import express from "express";
import mongoose from "mongoose";
import requestIp from "request-ip";
import "dotenv/config";
import cros from "cors";

// const MONGODB_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}mymongoinit.6md0cxy.mongodb.net/gemini?retryWrites=true&w=majority`;
// const MONGODB_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@chatai.ryvikzn.mongodb.net/?retryWrites=true&w=majority&appName=ChatAI`;
// const MONGODB_URL = "mongodb://localhost:27017/"
const MONGODB_URL="mongodb+srv://stellarstack:tIgbeSEWmC81t0M0@chatai.ryvikzn.mongodb.net/?retryWrites=true&w=majority&appName=ChatAI" 
console.log("mongo url",MONGODB_URL)
const PORT_NO = 3030;

const app = express();

app.use(express.json());
app.use(requestIp.mw());

const originUrl = process.env.CLIENT_REDIRECT_URL;

const crosOption = {
  origin: originUrl,
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cros(crosOption));

import publicRoutes from "./router/public.js";
import authRoutes from "./router/auth.js";

app.use("/v1/gemini", publicRoutes);
app.use("/v1", authRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;

  res.status(status).json({ message: message, data: data, error: error });
});

mongoose
  .connect(MONGODB_URL)
  .then((result) => {
    app.listen(process.env.PORT || PORT_NO, () => {
      console.log(`Gemini server is running on port ${PORT_NO}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
