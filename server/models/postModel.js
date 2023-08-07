import mongoose from "mongoose";

const postScheme = mongoose.Schema(
  {
    userId: { type: String, required: true },
    caption: { type: String, max: 500 },
    img: { type: String },
    likes: { type: Array, default: [] },
    comments: { type: Array, default: [] },
  },
  { timestamps: true }
);

export const postModel = mongoose.model("Post", postScheme);
