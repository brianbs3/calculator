let nums = [77,12345,4,0,8,7];
const _ = require('lodash');
const {
    double_each,
    square_each,
    sum,
    mean,
    sort,
    median
} = require('./calc_functions');


if(_.isArray(nums)){
    console.log('numbers:', nums);
    console.log('sorted:', sort(nums));
    console.log('double:', double_each(nums));
    console.log('square:', square_each(nums));
    console.log('sum:', sum(nums));
    console.log('mean:', mean(nums));
    console.log('median:', median(nums));
}