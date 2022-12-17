const post = require("../models/post.model");
const User = require("../models/user.model");
const create = async (req, res) => {
  try {
    let { title, body, category, user } = req.body;
    let u = await User.findOne({ username: user });
    //agregamos la relación entre post y usuario.
    const p = new post({
      title,
      body,
      category,
      user: u.id
    });
    const resp = await post.create(p);
    // agregamos la relación entre usuario y post.
    u.posts.push(p);
    await u.save();

    if (resp) {
      return res.json({
        msg: "post created successfully",
        details: resp
      })
    }
  } catch (error) {
    return res.status(500).json({
      msg: "error",
      details: error.message
    })
  }
};

const getAll = async (req, res) => {
  const postsWithUser = await post.find().populate("user");
  return res.json({
    postsWithUser
  });
}

module.exports = { create, getAll };