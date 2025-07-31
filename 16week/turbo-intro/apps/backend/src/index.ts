import express from "express";
import { json } from "express";
const PORT = process.env.PORT || 3002;
const app = express();

app.use(json());

app.get("/", (req, res) => {
  res.json({
    Messege: "Hello From the Server",
  });
});

app.listen(PORT, () => {
  console.log("listening on port" + PORT);
});
