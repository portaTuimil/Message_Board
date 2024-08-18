const path = require("node:path");
const express = require("express");
const app = express();
messages = require("./db/messageFetcher.js");
require("dotenv").config();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

PORT = process.env.PORT || 3000;

app.use("/", require("./routes/indexRouter.js"))
app.use("/new", require("./routes/newRouter"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
