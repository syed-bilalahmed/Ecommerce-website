const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const db= require("./config/mongoose-connection")

const ownersRouter=require("./routes/onwersRouter");
const usersRouter=require("./routes/usersRouter");
const productsRouter=require("./routes/productsRouter");
require("dotenv").config();

// Use middleware functions correctly
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use("/owner",ownersRouter);
app.use("/user",usersRouter);
app.use("/products",productsRouter);

// Set the view engine
app.set('view engine', 'ejs');

const port = 8080;

// Define a route
app.get('/', (req, res) => res.send('Hello World!'));

// Start the server
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
