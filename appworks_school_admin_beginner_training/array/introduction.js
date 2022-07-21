// Array: list of elements
// Javascript: write array as [...]
// index start from 0
// get length by arr.length

console.log("example1:")
let arr = [1,3,5,7,9]
console.log(arr[0]) // 1
console.log(arr[2]) // 5
console.log(arr[4]) // 9

console.log("example2:")
for (let i = 0; i < 5; i++) {
	console.log(arr[i])
}

console.log("example3:")
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i])
}


// print score
let names = ['alice', 'bob', 'cathy']
let scores = [100, 60, 74]
for (let i = 0; i < names.length; i++) {
	console.log(names[i], 'get', scores[i])
}

// average score
total = 0
for (let i = 0; i < names.length; i++) {
	total += scores[i]
}
avg = total / names.length
console.log(avg)

// max score
max_score = 0
for (let i = 0; i < names.length; i++) {
	if (scores[i] > max_score) {
		max_score = scores[i]
	}
}
console.log(max_score)

