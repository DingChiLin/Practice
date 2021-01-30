// print 1~10
function iterator(min, max) {
  if (min > max) {
    return;
  }
  console.log(min)
  iterator(min + 1, max);  
}

iterator(1, 10);

// add 1 for each element in array
function add1(nums, index = 0) {
  if (index >= nums.length) {
    return nums;
  }
  nums[index] += 1;
  return add1(nums, index + 1);
}

const arr = [1,2,3,4,5];
const arr2 = add1(arr);

console.log(arr2);

// sum up
function sum(min, max, total = 0) {
  if (min > max) {
    return total;
  }
  return sum(min + 1, max, total + min);
}

console.log(sum(1,10));

function sum2(min, max) {
  if (min == max) {
    return max
  }
  return sum2(min+1, max) + min
}

console.log(sum2(1,10))

// pow
function pow(x, y){
  if (y == 1){
    return x;
  }
  return x * pow(x, y-1);
}

console.log(pow(2,5));

// Euclidean Algorithm
function recursiveEuclideanAlgorithm(x, y) {
  console.log(x, y);
  if (x == y) {
    return x;
  }
    
  if ( x > y ){
    return recursiveEuclideanAlgorithm(x - y, y);
  } else {
    return recursiveEuclideanAlgorithm(x, y - x);
  }
}

console.log(recursiveEuclideanAlgorithm(34,10));

// Fibonacci
const memory = {}
function fibonacci(n) {
  if(n == 0) {
    return 0
  } else if (n == 1) {
    return 1
  } else if (memory[n]) {
    return memory[n]
  }

  const resultN = fibonacci(n-1) + fibonacci(n-2);
  memory[n] = resultN;
  return resultN;
}

console.log(fibonacci(5))
