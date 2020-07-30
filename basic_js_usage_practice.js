/**
 * Use tools
 * 1. {}
 * 2. []
 * 3. for (let i=0; i<n; i++) { ... }
 * 4. push
 * 5. +
 * 6. if ... else ...
 */


/**
 * Practice 1: count number of element as object
 */

function practice_1(input) {
 
}
let input1 = ['a', 'b', 'c', 'a', 'c', 'a']
console.log(practice_1(input1)) // expected output: {'a':3, 'b':1, 'c':2}

/**
 * Practice 2: mapping character to number
 */
function practice_2(input, mapping) {

}
let arr = ['a', 'b', 'c', 'a', 'b']
let mapping = {
    a: 1,
    b: 2,
    c: 3
}
console.log(practice_2(arr, mapping)) // expected output: [1, 2, 3, 1, 2]

/**
 * Practice 3: group by the same key and add the value to a list
 */

function practice_3(input) {

}
let input3 = [
    {key: 'a', value: 3},
    {key: 'b', value: 1},
    {key: 'c', value: 2},
    {key: 'a', value: 3},
    {key: 'c', value: 5}
]
console.log(practice_3(input3)) // expected output: {'a': [3,3], 'b': [1], 'c': [2,5]}

/**
 * Practice 4: group by the same key and sum up the value
 */

function practice_4(input) {

}

let input4 = [
    {key: 'a', value: 3},
    {key: 'b', value: 1},
    {key: 'c', value: 2},
    {key: 'a', value: 3},
    {key: 'c', value: 5}
]
console.log(practice_4(input4)) // expected output: {'a': 6, 'b': 1, 'c': 7}

/**
 * Practice 5: assign objects to students 
 */

function practice_5(students, student_objects) {

}

let students = [
    {student_id: 1, name: 'Arthur'},
    {student_id: 2, name: 'Peter'},
    {student_id: 3, name: 'Molly'},
]
let student_objects = [
    {student_id: 1, object: 'pen'},
    {student_id: 2, object: 'pen'},
    {student_id: 3, object: 'book'},
    {student_id: 1, object: 'book'},
    {student_id: 3, object: 'phone'},
]
console.log(practice_5(students, student_objects))
// expected output:
// [
//     { student_id: 1, name: 'Arthur', objects: [ 'pen', 'book' ] },
//     { student_id: 2, name: 'Peter', objects: [ 'pen' ] },
//     { student_id: 3, name: 'Molly', objects: [ 'book', 'phone' ] }
// ]
