const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  products: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model("Owner", ownerSchema);
