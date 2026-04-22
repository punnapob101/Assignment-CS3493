const CalculatePrice = (price, vat = 0.07) => {
    return price + (price * vat);
}
let result1 = CalculatePrice(1000, 0.1);
let result2 = CalculatePrice(1000);
console.log(result1);
console.log(result2);