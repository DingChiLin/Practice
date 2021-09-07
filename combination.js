var combine = function(n, k) {
    const result = [];
    
    const combination = (layer, start, comb) => {
        const array = comb;
                
        if (layer >= k) {
            result.push(array.slice());
            console.log('result.push(array): ', array);
            return;
        }
        
        for (let i = start; i <= n; i++) {
            array.push(i);
            combination(layer + 1, i + 1, array);
            array.pop();
        }
    }
    
    combination(0, 1, []);
    
    return result;
};

console.log(combine(4,3))
