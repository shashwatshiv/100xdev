// counter using setInterval and clearInterval for 30 sec

let n = 30;
let intervalID = setInterval(() => {
  console.log(n);
  n--;
  if (n < 0) clearInterval(intervalID);
}, 1000);
