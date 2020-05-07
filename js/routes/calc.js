'use strict';

const router = require('express').Router();

router.get('/', async(req, res) =>{
    console.log('route');
    return res.json({status: 'SUCCESS', message: 'initial route'});
});


module.exports = router;