const express = require ('express');
const router = express.Router();
const db = require('../data/db');

router.get('/', (req, res, next) => {
    req.session.destroy((err) => {
        console.log('logout router success')
        res.json({"msg" : "logoutSuccess"});   
    });
})

module.exports = router;