// Put some codes into a function, so that we can execute it by calling it

// define a function
function print_hello() {
	console.log("Hello")
}
// call this function
print_hello()


// define a function with input variable
function print_something(word) {
	console.log(word)
}
// call this function
print_something("I'm Arthur")


// define a function with return value
function create_animal() {
	return "Cat"
}
let animal = create_animal()
console.log(animal)

// define a function with condition
function create_animal_by_type(type) {
	if (type == 0) {
		return "Cat"
	} else {
		return "Dog"
	}
}
let animal2 = create_animal_by_type(1)
console.log(animal2)


// add input by 1
function add_one(x) {
	console.log('x is:', x)
	x = x + 1
	console.log('x is:', x)
	return x
}
let num = 0
let num_add_1 = add_one(num)
console.log(num_add_1)

// add x by n
function add(x, n) {
	return x + n
}
console.log(add(3,5))

