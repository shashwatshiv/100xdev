const fs = require("node:fs");
fs.writeFile(
  "/home/berserk/Desktop/100xdev/2week/02-nodejs/files/a.txt",
  "changed File",
  (err) => {
    if (err) throw err;
    console.log("file saved");
  }
);

fs.readFile(
  "/home/berserk/Desktop/100xdev/2week/02-nodejs/files/a.txt",
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);
