const express = require("express");
const router = express.Router(); 
const OwnerModel = require("../models/owner-model");

// Route to create a new owner
router.post("/create", async (req, res) => {
    try {
        const owners = await OwnerModel.find();
        if (owners.length > 0) {
            return res.status(403).send("You do not have permission to create more owners.");
        }
        
        const { username, email, password } = req.body;

        // Validate required fields
        if (!username || !email || !password) {
            return res.status(400).send("Username, email, and password are required.");
        }

        const createdOwner = await OwnerModel.create({
            username,
            email,
            password,
        });

        res.status(201).send(createdOwner);
    } catch (error) {
        res.status(500).send("Server error: " + error.message);
    }
});

// Route to test the router
router.get("/", (req, res) => {
    res.send("Owners Router");
});

module.exports = router;
