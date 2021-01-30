let a = [1,3,5,7,9];

let b = [];
for(let i=0; i<a.length; i++) {
    b.push(a[i]*2);
}

for(let x of a) {
    console.log(x); // 1,3,5,7,9
}

for(let i in a) {
    console.log(i) // 0,1,2,3,4
}

let b = a.map((o) => o*2);


console.log(b); // 2,4,6,8,10