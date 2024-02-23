const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

const sum = (n) => {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += i;
  }
  return ans;
};

let patients = [
  { name: "Shashwat", health: { kidney1: "healthy", kidney2: "healthy" } },
  { name: "Rahul", health: { kidney1: "healthy", kidney2: "unhealthy" } },
];

app.get("/", (req, res) => {
  const n = req.query.n;
  let ans = sum(n);
  res.send(patients);
});
app.post("/post", (req, res) => {
  let newUser = req.body.newUser;
  patients.push(newUser);
  res.send(patients);
});
app.put("/", (req, res) => {
  for (let i = 0; i < patients.length; i++) {
    Object.keys(patients[i].health).forEach((key) => {
      patients[i].health[key] = "healthy";
    });
  }
  res.send("Request Completed");
});
app.delete("/", (req, res) => {
  for (let i = 0; i < patients.length; i++) {
    Object.keys(patients[i].health).forEach((key) => {
      if (patients[i].health[key] == "unhealthy") {
        delete patients[i].health[key];
      }
    });
  }
  res.send("request completed");
});
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
