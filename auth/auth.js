require("dotenv").config();

const getToken = (req) => {
  let { authorization } = req.headers;
  if (authorization) {
    let [type, token] = authorization.split(" ");
    return (type === "Token" || type === "Bearer") ? token : null;
  }
  return null;
}