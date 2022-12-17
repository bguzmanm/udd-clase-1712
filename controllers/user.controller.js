const user = require("../models/user.model");

const findAll = async (req, res) => {
  try {
    const users = await user.find();
    return res.json({ users });
  } catch (error) {
    return res.status(500).json({
      msg: "error",
      details: error.message
    });
  }
};

const signup = async (req, res) => {
  try {
    let u = new user(req.body);
    let resp = await user.create(u);
    return res.json({
      msg: "user created successfully",
      details: resp
    })
  } catch (error) {
    return res.status(500).json({
      msg: "error",
      details: error.message
    });
  }
};

module.exports = { findAll, signup };