function shiftArr(length) {
  const arr = new Array(length).fill(0);
  console.time(length);
  arr.shift();
  console.timeEnd(length);
}

function popArr(length) {
  const arr = new Array(length).fill(0);
  console.time(length);
  arr.pop();
  console.timeEnd(length);
}

shiftArr(100000);
shiftArr(1000000);
shiftArr(10000000);

popArr(100000);
popArr(1000000);
popArr(10000000);
