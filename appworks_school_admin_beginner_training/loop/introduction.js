// Three different ways of adding 1
// i = i + 1
// i += 1
// i ++

console.log("Example 1:")
// Basic for loop
for (let i = 0; i < 10; i++) {
	console.log(i)
}

// loop with condition
console.log("Example 2:")
for (let i = 0; i < 10; i++) {
	if (i > 5) {
		console.log(i)
	}
}

// add variable outside
console.log("Example 3:")
let a = 1
for (let i = 0; i < 3; i++) {
	a += 1
}
console.log(a)

// while loop
console.log("Example 4:")
let i = 0
while (i < 10) {
	console.log(i)
	i ++
}

