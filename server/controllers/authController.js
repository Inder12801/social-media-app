import { userModel } from "../models/userModel.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// signup new user
export const signupUser = async (req, res) => {
  const { firstname, lastname, username, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new userModel({
    firstname,
    lastname,
    username,
    password: hashedPassword,
    email,
  });

  try {
    // check if user already exits
    let isExistingUsernameOrEmail = false;
    const existingUser = await userModel.findOne({
      $or: [{ username: username }, { email: email }],
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    } else {
      const newUser = await user.save();
      //jwt for new user
      const token = jwt.sign(
        { username: newUser.username, id: newUser._id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" }
      );
      res.status(201).json({ user, token: token });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  console.log(password);

  try {
    const user = await userModel.findOne({ username: username });
    console.log(user);
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const token = jwt.sign(
          { username: user.username, id: user._id },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "1h" }
        );
        res.status(200).json({ user, token });
      } else {
        res.status(400).json({ message: "Invalid password or username!" });
      }
    } else {
      res.status(404).json({ message: "User Not Found!" });
    }
  } catch (error) {}
};
