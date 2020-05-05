let nums = [1,3,4,5,0,8];
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

if(_.isArray(nums)){
    console.log('numbers:', nums);
    console.log('double:', double_each(nums));
    console.log('square:', square_each(nums));
    console.log('sum:', sum(nums));
    console.log('mean:', mean(nums));
}