import { userModel } from "../models/userModel.js";

import bcrypt from "bcrypt";

// resgister new user

export const signupUser = async (req, res) => {
  const { firstname, lastname, username, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new userModel({
    firstname,
    lastname,
    username,
    password: hashedPassword,
    email,
  });

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  console.log(password);

  try {
    const user = await userModel.findOne({ username: username });
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        res.status(200).json(user);
      } else {
        res.status(400).json({ message: "Invalid password" });
      }
    } else {
      res.status(404).json({ message: "User Not Found!" });
    }
  } catch (error) {}
};
