const express = require("express");
const router = express.Router();
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");




router.get("/", (req, res) => {
  res.send("Ueser Router");
});

router.post("/register", async (req, res) => {
  // res.send("User Register Route")
  //    console.log("user regsitertation Route");

  try {
    let { username, email, password } = req.body;
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return res.send(err.message);
        else {
          let newUser = await userModel.create({
            username,
            email,
            password: hash,
          });
         
          let token=jwt.sign({email, id:newUser._id},  process.env.JWT_KEY, { expiresIn: '1h' }) 
res.cookie("token",token)
res.send("user created sucsffully");

          // res.send(newUser);
        }
      });
    });
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
