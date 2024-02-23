let patients = [
  { name: "Shashwat", health: { kidney1: "healthy", kidney2: "unhealthy" } },
  { name: "Rahul", health: { kidney1: "unhealthy", kidney2: "unhealthy" } },
];

for (let i = 0; i < patients.length; i++) {
  for (let key of Object.keys(patients[i].health)) {
    patients[i].health[key] = "aksdjf";
  }
}

console.log(patients);

var p = {
  0: "value1",
  b: "value2",
  key: "value3",
};

for (var key of Object.keys(p)) {
  console.log(key + " -> " + p[key]);
}
