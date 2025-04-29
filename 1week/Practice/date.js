let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getTimezoneOffset());
console.log(date.toDateString());
let p = new Promise((resolve, reject) => {
  //   resolve("Success");
  reject({ message: "Error" });
});
p.then(() => {
  console.log(p);
}).catch((err) => {
  console.log(p);
  console.log(err.message);
});
function asyncOperation1() {
  console.log("operation 1");
}
// Simulating async operations using setTimeout
// function asyncOperation1(callback) {
//   console.log("Fetching user data...");
//   setTimeout(() => {
//     const userData = { userId: 123, name: "Shashwat" }; // Simulated result
//     console.log("User data fetched:", userData);
//     callback(userData.userId); // Pass userId to the next operation
//   }, 1000);
// }

// function asyncOperation2(userId, callback) {
//   console.log(`Fetching posts for user ${userId}...`);
//   setTimeout(() => {
//     const posts = ["Post1", "Post2", "Post3"]; // Simulated result
//     console.log("Posts fetched:", posts);
//     callback(posts[0]); // Pass the first post to the next operation
//   }, 1000);
// }

// function asyncOperation3(post, callback) {
//   console.log(`Fetching comments for ${post}...`);
//   setTimeout(() => {
//     const comments = ["Comment1", "Comment2"]; // Simulated result
//     console.log("Comments fetched:", comments);
//     callback(comments);
//   }, 1000);
// }

// // Execute the operations in sequence
// asyncOperation1((userId) => {
//   asyncOperation2(userId, (post) => {
//     asyncOperation3(post, (comments) => {
//       console.log("hello"); // Final step after all operations
//     });
//   });
// });
function promiseCode() {
  return new Promise((resolve, reject) => {
    console.log("fetching data from database");

    setTimeout(() => {
      const file = {
        hello: "shashwat",
      };
      resolve(file);
      console.log("Data is recieved after 3 sec");
    }, 3000);
  });
}
promiseCode().then((hello) => {
  console.log(hello);
});
