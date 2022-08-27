// basic
let a = 2
console.log("Example 1:")
if (a < 3) {
	console.log("YES!!")
} else {
	console.log("NONO")
} 

// ==
console.log("Example 2:")
let b = 5
if (a * b == 10) {	
	console.log("YES!!")
} else {
	console.log("NONO")
}

// !=
console.log("Example 3:")
if (a % b != 0) {	
	console.log("YES!!")
} else {
	console.log("NONO")
}

// update variable by condition
console.log("Example 4:")
if (a > 5) {
	b += a
} else {
	b -= a
}
console.log(b)


// nested
console.log("Example 5:")
if (a < 3) {
	if (b < 3) {
		console.log("YES")
	} else {
		console.log("NONO")
	}
} else {
	console.log("NONO")
}

// and
console.log("Example 6:")
if (a < 3 && b < 3) {
	console.log("YES!!")
} else {
	console.log("NONO")
}

// or
console.log("Example 7:")
if (a < 3 || b < 3) {
	console.log("YES!!")
} else {
	console.log("NONO")
}

