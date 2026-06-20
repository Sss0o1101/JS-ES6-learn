function sum(a, b) {
    return a + b;

}
console.log(sum(300, 700)); // 1000


function sum2(a, b) {
    console.log(a + b);

}
sum2(300, 700); // 1000


//------

function calculateTotal(price, amount, rate) {
    return price * amount * rate;
}

console.log(calculateTotal(1000, 2, 1.08)); // 2160
calculateTotal(1000, 2, 1.08); // 2160
calculateTotal(); // NaN


