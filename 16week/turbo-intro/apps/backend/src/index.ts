import express from "express";
import { json } from "express";
import { BACKEND_URL } from "@repo/common/dist/index";
const PORT = process.env.PORT || 3002;
const app = express();

app.use(json());

app.get("/", (req, res) => {
  res.json({
    Messege: "Hello From the Server",
  });
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT + " " + BACKEND_URL);
});
