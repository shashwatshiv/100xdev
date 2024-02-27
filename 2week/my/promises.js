const fs = require("fs");
const { resolve } = require("path");

function readFile(cb) {
  fs.readFile(
    "/home/berserk/Desktop/100xdev/2week/02-nodejs/files/a.txt",
    "utf8",
    (err, data) => {
      if (err) throw err;
      cb(data);
    }
  );
}
function logger(data) {
  console.log(data);
}
readFile(logger);

// Same Code now with promises

function readFile() {
  return new Promise(function (resolve) {
    fs.readFile(
      "/home/berserk/Desktop/100xdev/2week/my/file.txt",
      "utf8",
      (err, data) => {
        if (err) throw err;
        resolve(data);
      }
    );
  });
}

readFile().then(logger);

// Simple promise to understand how it works

var p = new Promise((resolve) => {
  resolve("Shashwat");
});
p.then(logger);
