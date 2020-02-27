function getProductSeries(productId, now) {
    return productId + now.toString();
}

const now = Date.now();
const productSeries = getProductSeries(111, now)
console.log(productSeries)