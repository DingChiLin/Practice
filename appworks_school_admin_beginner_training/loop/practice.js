// p1
let cnt1 = 0
for (let i = 1; i <= 10; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		cnt1 += 1
	}
}
console.log(cnt1)

// p2
let cnt2 = 0
for (let i = 1; i <= 20; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		if (i % 15 != 0) {
			cnt2 += 1
		}
	}
}
console.log(cnt2)

// p3
let cnt3 = 0
let k = 5
for (let i = 0; i < 10; i++) {
	if (i > k) {
		 cnt3 += 1
	}
}
console.log(cnt3)


