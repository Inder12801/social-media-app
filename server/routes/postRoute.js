import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  likeDislikePost,
} from "../controllers/postController.js";

const router = express.Router();

router.post("/", createPost);
router.get("/:id", getPost);
router.delete("/:id", deletePost);
router.put("/:id/like", likeDislikePost);

export default router;
