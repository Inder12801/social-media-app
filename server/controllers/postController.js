import { postModel } from "../models/postModel.js";

//create a post

export const createPost = async (req, res) => {
  const newPost = new postModel(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get post by id of user
export const getPost = async (req, res) => {
  try {
    const post = await postModel.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete a post
export const deletePost = async (req, res) => {
  const { userId } = req.body;
  try {
    const post = await postModel.findById(req.params.id);
    console.log(post.userId);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json("Post has been deleted!");
    } else {
      res.status(403).json("You can delete only your post!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// like a post

export const likeDislikePost = async (req, res) => {
  const { userId } = req.body;

  try {
    const post = await postModel.findById(req.params.id);
    if (!post.likes.includes(userId)) {
      console.log("here");
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("Post has been liked!");
    } else {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("Post has been disliked!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// get timeline posts of a user
