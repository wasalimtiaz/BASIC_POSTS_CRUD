const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const connectionURI = process.env.DB_CONNECTION;

// Connect to DB:
mongoose.connect(connectionURI, () => {
  console.log("Connected to DB!");
});
