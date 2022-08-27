// Array: list of elements
// Javascript: write array as [...]
// index start from 0
// get length by arr.length

let arr2 = [-1,300,2,6,7,4,2]
let cnt = 0;
let k = 4;
for (let i = 0; i < arr2.length; i++) {
	if (arr2[i] > k) {
		 cnt += 1;
	}
}
console.log(cnt)

