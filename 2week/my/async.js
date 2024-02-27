const p = new Promise((resolve) => {
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    sum += i;
  }
  resolve("My Name Is Shashwat");
});

async function main() {
  let value = await p;

  console.log(value);
}
console.log("ding");
main();
