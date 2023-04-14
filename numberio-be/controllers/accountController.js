const AccountModel = require("../models/accountModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const accountController = {
  register: async (req, res) => {
    try {
      let { username, firstname, lastname, password, email, avatar } = req.body;
      let user = await AccountModel.findOne({
        username,
      });
      if (user)
        return res.status(400).json({ message: "Username  already exists" });
      if (password.length < 6)
        return res
          .status(400)
          .json({ message: "The password must be than 6 characters" });
      const hashPassword = bcrypt.hashSync(password, 10);
      password = hashPassword;
      const newUser = new AccountModel({
        username,
        firstname,
        lastname,
        password,
        email,
        avatar,
      });
      await newUser.save();
      const accessToken = createAccessToken({ id: newUser._id });
      const refeshToken = refeshAccessToken({ id: newUser._id });
      res.cookie("refeshtoken", refeshToken, {
        httpOnly: true,
        path: "user/refesh_token",
      });
      res.status(200).json({ accessToken });
    } catch (error) {
      return res.status(500).json({ message: error.message });
      console.log(1);
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await AccountModel.findOne({ username });
      if (!user) return res.status(400).json({ message: "User is not exist" });
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res
          .status(400)
          .json({ message: "user or password is not correct" });
      const accessToken = createAccessToken({ id: user._id });
      const refeshToken = refeshAccessToken({ id: user._id });
      res.cookie("refeshtoken", refeshToken, {
        httpOnly: true,
        path: "user/refesh_token",
      });
      res.json({ accessToken });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("refeshtoken", { path: "user/refesh_token" });
      return res.status(200).json({ message: "logged out" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  getUser: async (req, res) => {
    try {
      let user = await AccountModel.findById(req.user.id).select("-password");
      if (!user) res.status(400).json({ message: "user is not exist" });
      res.json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  refeshToken: (req, res) => {
    try {
      const rf_token = req.cookies.refeshtoken;
      if (!rf_token)
        return res.status(400).json({ message: "Please Login or Register" });
      jwt.verify(rf_token, process.env.REFESH_TOKEN_SECRET, (err, user) => {
        if (err)
          return res.status(400).json({ message: "Please Login ro Register" });
        const accessToken = createAccessToken({ id: user.id });
        return res.json({ accessToken });
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }

    res.json({ rf_token });
  },
};
const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
};
const refeshAccessToken = (user) => {
  return jwt.sign(user, process.env.REFESH_TOKEN_SECRET, { expiresIn: "7d" });
};
module.exports = accountController;
