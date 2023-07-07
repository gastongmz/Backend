require("dotenv").config();
const { response } = require("express");
const jwt = require("jsonwebtoken");

const validateJwt = async (req, res = response, next) => {
  try {
    console.log("jwt" + req.headers.jwt)    
    const jwtValidate = jwt.verify(req.headers.jwt, process.env.PRIVATE_KEY);
    //const jwtValidate = jwt.verify(req.body.jwt, process.env.PRIVATE_KEY);
    if (jwtValidate) {
      next();
    } else {
      return res.status(401).json({
        message: "Unauthorized",
        status: 401,
      });
    }
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized",
      status: 401,
    });
  }
};

module.exports = validateJwt;
