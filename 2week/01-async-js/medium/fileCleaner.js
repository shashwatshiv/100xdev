function modify(text) {
  let yo = text
    .trim()
    .split(" ")
    .filter((words) => {
      return words != "";
    });
  processedString = yo.join(" ");
  return processedString;
}
const fs = require("node:fs");
fs.readFile("./file.txt", "utf8", (err, data) => {
  if (err) throw err;
  let processedString = "";
  processedString = modify(data);
  fs.writeFile("./file.txt", processedString, (err) => {
    if (err) throw err;
    console.log("file modified");
  });
});
