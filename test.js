N = 10 ** 9;

console.time()
let a = 0;
for (let i = 0; i < N; i++) {
    a += i;
}
console.log(a)
console.timeEnd()

// a. 1 ms
// b. 1 s
// c. 1 min