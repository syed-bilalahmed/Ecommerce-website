const express = require("express");
const router = express.Router();
const{registerUser,loginUser,logOut}=require("../controllers/authController");

router.get("/", (req, res) => {
  res.send("Ueser Router");
});
//register user
router.post("/register", registerUser);
//login user
router.post("/login", loginUser);

router.post("/logout", logOut);




module.exports = router;
