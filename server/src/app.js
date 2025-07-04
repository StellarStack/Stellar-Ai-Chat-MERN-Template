import express from "express";
import mongoose from "mongoose";
import requestIp from "request-ip";
import "dotenv/config";
import cros from "cors";
import path from "path";

// const MONGODB_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}mymongoinit.6md0cxy.mongodb.net/gemini?retryWrites=true&w=majority`;
const MONGODB_URL = process.env.MONGO_URL; //"mongodb://localhost:27017/"
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

// Serve static files from the React app build at /chatapp
//app.use("/chatapp", express.static(path.join(__dirname, "../../client-fe/build")));

// Catch-all handler to serve React's index.html for any non-API route under /chatapp
//app.get("/chatapp/*", (req, res) => {
//  res.sendFile(path.join(__dirname, "../../client-fe/build", "index.html"));
//});

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
