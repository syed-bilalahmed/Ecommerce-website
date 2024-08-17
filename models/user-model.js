const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String, // Corrected from typeof to type
    required: true,
  },
  email: {
    type: String, // Corrected from typeof to type
    required: true,
  },
  password: {
    type: String, // Corrected from typeof to type
    required: true,
  },
  cart: {
    type: [String], // Corrected from typeof to type, assuming cart is an array of strings
    default: [],
  },
  orders: {
    type: [String], // Corrected from typeof to type, assuming orders is an array of strings
    default: [],
  },
  contact: {
    type: Number, // Corrected from typeof to type
  },
  image: {
    type: String, // Corrected from typeof to type
  },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
