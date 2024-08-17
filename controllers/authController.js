const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateUserToken");

module.exports.registerUser= async (req, res) => {
    // res.send("User Register Route")
    //    console.log("user regsitertation Route");
  
    try {
      //accpting from body
      let { username, email, password } = req.body;
  
      //using bcrypt , hashed password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
          if (err) return res.send(err.message);
          else {
            let newUser = await userModel.create({
              username,
              email,
              password: hash,
            });
  
            // token creation
            let token = generateToken(newUser);
            res.cookie("token", token);
            res.send("user created sucsffully");
  
            // res.send(newUser);
          }
        });
      });
    } catch (error) {
      res.send(error.message);
    }
  }