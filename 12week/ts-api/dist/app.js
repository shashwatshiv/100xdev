"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
let totalAge = sumOfAge({ name: "shaswat", age: 12 }, { name: "kirat", age: 34 });
console.log(totalAge);
