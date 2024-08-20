const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const db = require("./config/mongoose-connection");
const expressSession = require("express-session");
const flash = require("connect-flash");

const indexRouter = require("./routes/indexRouter");
const ownersRouter = require("./routes/onwersRouter"); // Fixed typo
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

require("dotenv").config();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressSession({
    secret: process.env.JWT_KEY,
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

// Middleware to pass flash messages to all views
app.use((req, res, next) => {
    res.locals.messages = req.flash();
    next();
});

// Route handling
app.use("/", indexRouter);
app.use("/owner", ownersRouter);
app.use("/user", usersRouter);
app.use("/products", productsRouter);

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Ensure this path is correct

const port = 8080;

// Start the server
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
