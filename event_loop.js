// Example: 

// setTimeout(function() {
//     console.log('setTimeout');
// })

// new Promise(function(resolve) {
//     console.log('promise');
//     resolve();
// }).then(function() {
//     console.log('then');
// })

// console.log("just a log")

// Answer: 
//  promise
//  just a log
//  then
//  setTimeout 

// Example: 

// console.log('1');

// setTimeout(function() {
//     console.log('2');
//     process.nextTick(function() {
//         console.log('3');
//     })
//     new Promise(function(resolve) {
//         console.log('4');
//         resolve();
//     }).then(function() {
//         console.log('5')
//     })
// })
// process.nextTick(function() {
//     console.log('6');
// })
// new Promise(function(resolve) {
//     console.log('7');
//     resolve();
// }).then(function() {
//     console.log('8')
// })

// setTimeout(function() {
//     console.log('9');
//     process.nextTick(function() {
//         console.log('10');
//     })
//     new Promise(function(resolve) {
//         console.log('11');
//         resolve();
//     }).then(function() {
//         console.log('12')
//     })
// })

// console.log('console');

// Answer:
// 1, 7, console, 6, 8, 2, 4, 3, 5, 9, 11, 10, 12