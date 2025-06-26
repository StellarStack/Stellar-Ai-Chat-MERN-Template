import express from "express";

const router = express.Router();

import {
  getGeminiHome,
  postGemini,
  getChatHistory,
  postChat,
  updateLocation,
} from "../controller/public.js";
import { authMiddleware } from "../middleware/auth.js";
import { rateLimit } from "../middleware/rateLimit.js";

router.get("/api", getGeminiHome);
router.post("/api/chat", (req, res, next) => {
  console.log("POST /gemini/api/chat hit");
  next();
}, authMiddleware, rateLimit, postGemini);
router.get("/api/getchathistory", authMiddleware, getChatHistory);
router.post("/api/chatdata", authMiddleware, postChat);
router.put("/api/updatelocation", authMiddleware, updateLocation);

export default router;
