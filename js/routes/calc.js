'use strict';

const router = require('express').Router();
const {double_each,square_each,sort,mean,median} = require('../calc_functions');

router.post('/all', async(req, res) =>{
    try{
        const n = req.body.numbers;
        console.log(req.body);
        return res.json({
            original_numbers: n,
            sorted_numbers: sort(n),
            double_each: double_each(n),
            square_each: square_each(n),
            mean: mean(n),
            median: median(n)
        });
    }
    catch(err){
        console.log('error', err);

    }
});


module.exports = router;