interface User {
  name: string;
  age: number;
}
function sumOfAge(user1: User, user2: User): number {
  return user1.age + user2.age;
}
let totalAge: number = sumOfAge(
  { name: "shaswat", age: 12 },
  { name: "kirat", age: 34 },
);
console.log(totalAge);
