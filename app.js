const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/index");
const dotenv = require("dotenv");
dotenv.config();

// DB connection
require("./config/db");

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use("/", routes);

// Listener
const Port = process.env.PORT || 8080;
app.listen(Port, () => console.log(`Listening on port ${Port}...`));
