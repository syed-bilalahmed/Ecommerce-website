const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");

module.exports = async (req, res, next) => {
    try {
        // Check if the token is present in cookies
        if (!req.cookies || !req.cookies.token) {
            req.flash("error", "You need to log in first");
            return res.redirect("/");
        }

        // Verify the JWT token
        let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);

        // Find the user based on the email in the token
        let user = await userModel.findOne({ email: decoded.email }).select("-password");
        
        if (!user) {
            req.flash("error", "User not found");
            return res.redirect("/");
        }

        // Attach the user to the request object
        req.user = user;

        // Continue to the next middleware
        next();
    } catch (error) {
        req.flash("error", "Something went wrong");
        res.redirect("/");
    }
};
