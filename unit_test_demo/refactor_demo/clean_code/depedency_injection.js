/**
 * No Dependency Injection
 */
function getProductSeries1(productId) {
    let now = Date.now();
    return productId + now.toString();
}

const productSeries1 = getProductSeries1(111);
console.log(productSeries1);

/**
 * With Dependency Injection
 */
// function getProductSeries2(productId, now) {
//     return productId + now.toString();
// }

// let now = Date.now();
// const productSeries2 = getProductSeries2(111, now);
// console.log(productSeries2);