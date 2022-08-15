function check(str) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    } else {
      i ++;
      j --;
    }
  }
  return true; 
 }
console.log(check('abcd'))