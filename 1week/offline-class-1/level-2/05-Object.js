// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("key1");
  console.log("After hasOwnProperty():", hasProp);
  // using the given function you can add new property to same object or create new object with new entries.
  obj = Object.assign({}, obj, { newProperty: "newVaasalue" });
  console.log("After Object.assign():", obj);
}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
