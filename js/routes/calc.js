'use strict';

const router = require('express').Router();
const _ = require('lodash');
const {double_each,square_each,sort,mean,median,variance,standard_deviation,add,sub,mul,div,f2c_all,c2f_all,quantile} = require('../calc_functions');

router.post('/all', async(req, res) =>{
    try{
        const n = req.body.numbers;
        console.log(req.body);
        if(_.isArray(n)){
            return res.json({
                original_numbers: n,
                sorted_numbers: sort(n),
                double_each: double_each(n),
                square_each: square_each(n),
                quantile: quantile(n),
                variance: variance(n),
                standard_deviation: standard_deviation(n),
                mean: mean(n),
                median: median(n),
                add: add(n[0],n[1]),
                sub: sub(n[0], n[1]),
                mul: mul(n[0], n[1]),
                div: div(n[0], n[1]),
                f2c: f2c_all(n),
                c2f: c2f_all(n)
            });
        }
        else
            return res.status(401).json({ status: 'FAILED', message: 'seems its not an array' });
    }
    catch(err){
        console.log('error', err);

    }
});


module.exports = router;