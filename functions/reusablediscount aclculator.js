function discountCalculator(discount){
    return function(price){
        return price-price*(discount/100);
    }

}
let ten=discountCalculator(10);
console.log(ten(100));
let twenty=discountCalculator(20);
console.log(twenty(100));