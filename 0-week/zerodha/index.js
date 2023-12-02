function returnCalculator() {
  return false;
  console.log("returnCalculator");
  let capital = document.getElementById("capital").value;
  let year = document.getElementById("year").value;
  let interest = document.getElementById("interest").value;
  let gain = capital * Math.pow(1 + interest / 100, year);
  document.getElementById("result").innerHTML = gain;
}
