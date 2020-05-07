const double_each = (numbers) => {
    console.log('numbers from funct:', numbers)
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

module.exports = {
    double_each,
    square_each,
    sum,
    mean,
    sort,
    median
};