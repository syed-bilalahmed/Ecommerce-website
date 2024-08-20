const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateUserToken");

module.exports.registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        let user = await userModel.findOne({ email });
        if (user) {
            req.flash('error', "You already have an account. Please log in.");
            return res.redirect('/'); // Redirect back to registration page
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        let newUser = await userModel.create({
            username,
            email,
            password: hashedPassword,
        });

        const token = generateToken(newUser);
        res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
        req.flash('success', "User created successfully");
        res.redirect('/'); // Redirect back to registration page or login page
    } catch (error) {
        req.flash('error', "Server error: " + error.message);
        res.redirect('/'); // Redirect back to registration page
    }
};


// User Login
module.exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            req.flash('error', "Invalid credentials or register.");
            return res.redirect('/'); // Redirect back to login page
        }

        const match = await bcrypt.compare(password, user.password);
        if (match) {
            const token = generateToken(user);
            res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
            req.flash('success', "You are logged in.");
            res.redirect('/shop'); // Redirect to the shop page
        } else {
            req.flash('error', "Invalid credentials or register.");
            res.redirect('/'); // Redirect back to login page
        }
    } catch (error) {
        req.flash('error', "Server error: " + error.message);
        res.redirect('/'); // Redirect back to login page
    }
};


module.exports.logOut =  (req, res) => {
    try {
        // Clear the token cookie
        res.cookie('token', '', { httpOnly: true, secure: process.env.NODE_ENV === 'production', expires: new Date(0) });
        req.flash('success', 'You have been logged out.');
        res.redirect('/'); // Redirect to home page or login page
    } catch (error) {
        req.flash('error', 'Error logging out: ' + error.message);
        res.redirect('/'); // Redirect to home page or login page
    }
};