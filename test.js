function test(b) {
	b.a = 10 // V
	b = {a:1000} // X
}

let a = 100;
let b = {a:100}
test(b)
console.log(b);


