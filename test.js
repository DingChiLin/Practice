let arr = [-4,-3,-1,-10,-6,-2]
let ans = -Infinity
for(i = 0; i < arr.length; i++) {
  if (arr[i] > ans) {
    ans = arr[i];
  }
}
console.log(ans) // 6
