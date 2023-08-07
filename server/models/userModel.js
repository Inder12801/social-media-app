import mongoose from "mongoose";

// Creating user Schema

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePic: {
      type: String,
      default: "",
    },
    coverPic: {
      type: String,
      default: "",
    },
    about: {
      type: String,
    },
    location: String,
    relationship: {
      type: Number,
      enum: [1, 2, 3],
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    posts: {
      type: Array,
      default: [],
    },
    mobileNo: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const userModel = mongoose.model("Users", userSchema);
