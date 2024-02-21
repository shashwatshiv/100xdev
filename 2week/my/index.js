const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/converse", (req, res) => {
  // console.log(req.headers);
  const hell = req.body.hellcall;
  console.log(hell);
  res.json({ hello: "thats the way to display" });
});
app.listen(port, () => {
  console.log("listening on port ");
});
