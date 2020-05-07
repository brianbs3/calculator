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

module.exports = {
    double_each,
    square_each,
    sum,
    mean,
    sort,
    median,
    add,
    sub,
    mul,
    div,
    f2c,
    f2c_all,
    c2f,
    c2f_all
};