const _ = require('lodash');

const length = 1000000;
const arr = [...Array(length).keys()];

console.time('loop');
let result1 = []
for(i=0; i<length; i++){
    let num = arr[i];
    if(num % 2 == 1){
        result1.push(num * num);
    }
}
console.timeEnd('loop')


console.time('fp');
const result2 = arr
    .filter(x => x%2)
    .map(x => x*x)
    
console.timeEnd('fp');

console.log(_.isEqual(result1, result2));

// 1. fp: performance is bad (5~10* slow)
// 2. fp: function order matter! (need filter first)