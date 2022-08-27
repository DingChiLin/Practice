function find(n) {
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            if (i % 15 != 0) {
                cnt += 1;
            }
        }
    }
    return cnt;
}

let result = find(20) // 3, 5, 6, 9, 10, 12, 18, 20 
console.log(result)