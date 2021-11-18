// Array
// JS: Array, Python: List

let a = [1,2,3,4,5]
a.push(6) // [1,2,3,4,5,6] O(1) append()
a.pop() // [1,2,3,4,5] O(1) pop()
a.shift() // [2,3,4,5] O(N)
a.unshift(1) // [1,2,3,4,5] O(N)
console.log(a[4]) // O(1)

// Hash Table
// JS: Object, Map, Python: Dictionary

let b = {'a': 1, 'b': 2, 'c': 3} // hash table 
let c = {a:1, b:2, c:3} // object

// key, value
// look up a key: console.log( b['a'] )  O(1)
// b['a'] exist or not? O(1)

nameList = ['arthur', 'shirney', 'kkk', ....] // O(N)
nameList = {'arthur':0, 'shirney':0, 'kkk': 0} // O(1)

products = [{id: 1, title:'a'}, {id:2, title:'b'}, {id:3, title: 'c'}]
variants = [{pid: 1, color:'blue'}, {pid:1, color:'red'}, {pid:2, color:'white'}]

// O(M)
variantsMap = {
	1: [
		{pid: 1, color:'blue'}, {pid:1, color:'red'}
	]
	2: [
		{pid:2, color:'white'}
	]
}

// O(N * 1) = O(N)
for (let i = 0; i < products.length; i ++) { // O(N)
	pid = products[i].id
	products[i].variants = variantsMap[pid] // O(1)
}

// O(M) + O(N) = O(M+N) 
// O(M*N)
