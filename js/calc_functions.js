const _ = require('lodash');

const double_each = (numbers) => {
    return numbers.map(n => n * 2);
};

const square_each = (numbers) => {
    return numbers.map(n => n*n);
}
/**
 * return the sum of the array of numbers
 * @param {*} numbers 
 */
const sum = (numbers) => {
    let s = 0;
    numbers.forEach(n => {
        s += n;
    })
    return s;
}

const mean = (numbers) => {
    return(sum(numbers) / numbers.length);
}

/**
 * return the list of numbers sorted by number value
 * @param {*} numbers 
 */
const sort = (numbers) => {
    return numbers.sort((a,b) =>{
        return a - b;
    });
}

const median = (numbers) => {
    numbers = sort(numbers);
    return (numbers.length % 2 === 0) ? 
        mean([numbers[parseInt(numbers.length/2) - 1], 
        numbers[parseInt(numbers.length/2)]]) : 
        numbers[parseInt(numbers.length/2)];
}

const variance = (numbers) => {
    const theMean = mean(numbers);
    const tmpNumbers = numbers.map((n) => Math.pow((n - theMean), 2));
    return sum(tmpNumbers) / (tmpNumbers.length - 1);
}

const standard_deviation = (numbers) => {
    return Math.sqrt(variance(numbers));
}

const add = (a,b) => {
    return a+b;
}
const sub = (a,b) => {
    return a-b;
}
const mul = (a,b) => {
    return a*b;
}
const div = (a,b) => {
    return a/b;
}

const f2c = (f) => {
    return((f-32)/1.8);
}

const f2c_all = (numbers) => {
    return numbers.map(n => f2c(n));
}

const c2f = (n) => {
    return ((n * (9/5)) + 32)
}
const c2f_all = (numbers) => {
    return numbers.map(n => c2f(n));
}

const quantile = (numbers) => {
    const med = median(numbers);
    const medIndex = _.indexOf(numbers, med);    
    const q1Arr = _.slice(numbers, 0, medIndex);
    const q3Arr = _.slice(numbers, medIndex + 1, numbers.length);
    const q1 = median(q1Arr);
    const q3 = median(q3Arr);

    return {
        q1: q1,
        q3: q3,
        iqr: q3 - q1
    };
}

module.exports = {
    double_each,
    square_each,
    sum,
    mean,
    sort,
    median,
    variance,
    standard_deviation,
    add,
    sub,
    mul,
    div,
    f2c,
    f2c_all,
    c2f,
    c2f_all,
    quantile
};