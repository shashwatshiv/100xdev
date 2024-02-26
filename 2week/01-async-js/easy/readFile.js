const fs = require("node:fs");
fs.readFile(
  "/home/berserk/Desktop/100xdev/2week/02-nodejs/files/a.txt",
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);
let sum = 0;
for (let i = 0; i < 10000000000; i++) {
  sum += i;
}
console.log("yo");
