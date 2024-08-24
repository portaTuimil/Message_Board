const { Router } = require("express");
const newRouter = Router();
messages = require("../db/messageFetcher.js");

newRouter.get("/", (req, res) =>{res.render("new")});
newRouter.post("/", (req, res) =>{
  //This line depends on urlencoded in index.js
  messages.push({ text: req.body.message, user: req.body.author, added: (String(new Date()).substring(0, 24) + " UTC") });
  res.redirect("/")
});

module.exports = newRouter;
