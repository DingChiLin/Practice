console.time();
const str = "a";
for (let i = 0; i < 2500000; i ++) {
  if (i === str) {
    console.log("get");
  }
}
console.timeEnd();
