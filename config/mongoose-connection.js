const mongoose =require("mongoose");

try {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  } catch (error) {
    handleError(error);
  }

