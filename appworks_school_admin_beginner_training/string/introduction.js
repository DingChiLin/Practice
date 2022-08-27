let str = "abcdef"
console.log("example 1:")
for (let i = 0; i < str.length; i++) {
	console.log(str[i])
}

console.log("example 2:")
let id = 0
while (id < str.length) {
	console.log(str[id])
	id += 1
}

console.log("example 3:")
let i = 0
let j = str.length - 1
while (i < j) {
	console.log(str[i], str[j])
	i += 1
	j -= 1
}

