const express = require("express");
const morgan = require("morgan");

const path = require("path");

// intializations
const app = express();
require('./mongodb');

// settings
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
//app.use(express.json());

// routes
app.use(require("./routes/index"));

// static files
app.use(express.static(path.join(__dirname, "public")));

//starting server
app.listen(app.get("port"), () => {
    console.log("Server ON");
});