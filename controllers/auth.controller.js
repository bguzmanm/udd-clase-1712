const user = require("../models/user.model");
const jwt = require("../auth/jwt");

const auth = async (req, res) => {
  try {
    const filter = {
      username: req.body.username,
      password: req.body.password,
      active: true
    }
    const u = await user.findOne(filter);
    if (u) {
      return res.json({
        msg: "ok",
        token: jwt.getToken(req.body.username) // genero el token y lo agrego al return
      });
    } else {
      return res.status(401).json({
        msg: "unauthorized",
        details: "no te pases de listillo"
      })
    }
  } catch (error) {
    return res.json({
      msg: "error en autenticación",
      details: error.message
    })
  }
}

module.exports = { auth };