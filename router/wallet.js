const express = require ('express');
const router = express.Router();
const db = require('../data/db');

router.get('/', (req, res, next) => {
    res.render('wallet.ejs')
    console.log('wallet page open')
})

module.exports = router;