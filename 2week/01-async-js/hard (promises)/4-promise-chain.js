/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  let ms = 1000 * t;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

function wait2(t) {
  let ms = 1000 * t;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

function wait3(t) {
  let ms = 1000 * t;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function calculateTime(t1, t2, t3) {
  let timestamp1 = Date.now();
  await wait1(t1);
  await wait2(t2);
  await wait3(t3);
  let timestamp2 = Date.now();
  return new Promise((resolve) => {
    var time = timestamp2 - timestamp1;
    resolve(time);
  });
}

module.exports = calculateTime;
