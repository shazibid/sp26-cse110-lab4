/**
 * 
 * @param {*} num1, first number to add. 
 * @param {*} num2, second number to add. 
 * @param {*} add, boolean value to tell the function what to do. 
 * @returns The sum of the two numbers if add is true and false otherwise.

function sumValues(num1, num2, add) {
    if(add) {
        var result = 0;

        result = num1 + num2;
        console.log('values added: ', result);
    } else return;
    console.log('final result: ', result);
}
    

sumValues(10, 10, true)
*/

function discountPrices(prices, discount) {
    var discounted = [];
    const length = prices.length;

    for (let i = 0; i < prices.length; i++) {
        let discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }
    //console.log(i);
    //console.log(length);

    for (let i = 0; i < discounted.length; i++) {
        console.log(discounted[i]);
    }

    return discounted;
}

discountPrices([100, 200, 300], 0.5);

/*
function discountPrices(prices, discount) {
    const discounted = [];
    const finalPrice = 0;

    for (let i = 0; i < prices.length; i++) {
        const discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100
        discounted.push(finalPrice);
    }
    //console.log(i);
    //console.log(discountedPrice);
    //console.log(finalPrice);

    return discounted;
}

discountPrices([100, 200, 300], 0.5);
*/