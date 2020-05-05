let nums = [77,12345,4,0,8,7];
const _ = require('lodash');
// console.log(numbers);
// let newNumbers = numbers.map(n => n * 2);
// console.log(newNumbers);


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
    return (numbers.length % 2 === 0) ? mean([numbers[parseInt(numbers.length/2) - 1], numbers[parseInt(numbers.length/2)]]) : numbers[parseInt(numbers.length/2)];
}

if(_.isArray(nums)){
    console.log('numbers:', nums);
    console.log('sorted:', sort(nums));
    console.log('double:', double_each(nums));
    console.log('square:', square_each(nums));
    console.log('sum:', sum(nums));
    console.log('mean:', mean(nums));
    console.log('median:', median(nums));
}