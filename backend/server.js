const express = require("express");
var bodyParser = require("body-parser");
let model = require("./crud.js");
const PORT = process.env.PORT || 3001;
const app = express();
const ejs = require("ejs");
app.use(express.json());
app.set("view engine", "ejs");

model.read("jefftheli");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static(__dirname + "/public"));

app.post("/login", (req, res) => {
  username = req.body.username;
  password = req.body.password;
  model.read(username)
    .then((data) => {
      if (data.username == username && data.password == password) {
        console.log(`Login successful`);
        res.redirect("/yourtimeline");
      } else {
        console.log(password);
      }
    })
});

app.get("/api", (req, res) => {
  res.json({ message: "ligma balls" });
});

app.get("/getAllUserPosts", (req, res) => {
  model
    .getAllUserPosts("jefftheli")
    .then((data) => res.json({ message: data }));
});

app.post("/yourtimeline", (req, res) => {
  // console.log(req.body);
  console.log(req.body[0]);
  model.savePosts("jefftheli", req.body[0]);
  res.json({ status: "success" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
