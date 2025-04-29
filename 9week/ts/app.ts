const x: number = 2;
console.log(x);
let ndame: string = "shashwat";
function hello(name: string) {
  console.log("hello" + name);
}
hello("yoyo");
function sum(a: number, b: number): number {
  return a + b;
}
const value = sum(2, 3);
function isLegal(user: User): boolean {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}
interface User {
  name: string;
  age: number;
}
