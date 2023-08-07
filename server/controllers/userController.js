import { userModel } from "../models/userModel.js";
import bcrypt from "bcrypt";
export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    let user = await userModel.findById(id);
    if (user) {
      const { password, updatedAt, ...other } = user._doc;
      res.status(200).json(other);
    } else {
      res.status(404).json({ message: "User not found!" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus, password } = req.body;
  if (id === currentUserId || currentUserAdminStatus) {
    // Update the User document with new data provided in request body
    console.log("Updating", { ...req.body });
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }
      const updatedUser = await userModel.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        { new: true }
      );
      const { password: pass, ...otherDetails } = updatedUser._doc;
      res.status(200).json(otherDetails);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  } else {
    res.status(403).json({ message: "You can update only your account!" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus } = req.body;
  try {
    if (currentUserId === id || currentUserAdminStatus) {
      const user = await userModel.findByIdAndDelete(id);
      res
        .status(201)
        .json({ message: `User ${user.username} deleted succesfully!` });
    } else {
      res.status(403).json({ message: "You can delete only your account!" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const followUser = async (req, res) => {
  //user to be followed
  const id = req.params.id;

  //user that is following
  const { currentUserId } = req.body;
  if (currentUserId === id) {
    res.status(403).json({ message: "You can't follow yourself!" });
  } else {
    try {
      console.log(id);
      console.log(currentUserId);
      let userToBeFollowed = await userModel.findById(id);
      const currentUser = await userModel.findById(currentUserId);
      console.log("user to be follow  :", userToBeFollowed.username);
      console.log("Current User", currentUser.username);

      if (!userToBeFollowed.followers.includes(currentUserId)) {
        await userToBeFollowed.updateOne({
          $push: { followers: currentUserId },
        });
        await currentUser.updateOne({ $push: { following: id } });
        res.status(200).json({ message: "User has been followed!" });
      } else {
        res.status(403).json({ message: "You already follow this user!" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }
};

export const unfollowUser = async (req, res) => {
  //user to be followed
  const id = req.params.id;

  //user that is following
  const { currentUserId } = req.body;
  if (currentUserId === id) {
    res.status(403).json({ message: "You can't unfollow yourself!" });
  } else {
    try {
      let userToBeUnfollowed = await userModel.findById(id);
      const currentUser = await userModel.findById(currentUserId);
      if (userToBeUnfollowed.followers.includes(currentUserId)) {
        await userToBeUnfollowed.updateOne({
          $pull: { followers: currentUserId },
        });
        await currentUser.updateOne({ $pull: { following: id } });
        res.status(200).json({ message: "User has been unfollowed!" });
      } else {
        res.status(403).json({ message: "You don't follow this user!" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }
};
