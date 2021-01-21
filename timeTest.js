let N = 1000000000

console.time()
let a = 0;
for (let i = 0; i < N; i++) {
    a += i;
}
console.log(a)
console.timeEnd()

