// counter using setTimeout and recursion

function counter(sec) {
  if (sec > 0) {
    setTimeout(() => {
      console.log(sec);
      counter(sec - 1);
    }, 1000);
  }
}
counter(10);
